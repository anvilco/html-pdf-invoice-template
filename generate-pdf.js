// Generate a PDF from the HTML code in this repo.
//
// Usage:
// ANVIL_API_TOKEN=<YOURKEY> node ./generate-pdf.js && open ./generate-plain-html.output.pdf

const fs = require('fs')
const path = require('path')
const Anvil = require('@anvilco/anvil').default

const apiKey = process.env.ANVIL_API_TOKEN

function buildHTMLToPDFPayload () {
  const html = fs.readFileSync('./invoice.html').toString()
  const css =
    fs.readFileSync('./invoice.css').toString() +
    fs.readFileSync('./invoice-pdf.css').toString()
  return {
    type: 'html',
    title: 'HTML Invoice',
    data: {
      html,
      css,
    },
    page: {
      marginLeft: '60px',
      marginRight: '60px',
    },
  }
}

async function main () {
  const client = new Anvil({
    apiKey,
  })

  const exampleData = buildHTMLToPDFPayload()
  const { statusCode, data, errors } = await client.generatePDF(exampleData)

  if (statusCode === 200) {
    const scriptDir = __dirname
    const outputFilePath = path.join(scriptDir, 'generate-plain-html.output.pdf')
    fs.writeFileSync(outputFilePath, data, { encoding: null })
  } else {
    console.log(statusCode, JSON.stringify(errors || data, null, 2))
  }
}

main()
  .then(() => {
    process.exit(0)
  })
  .catch((err) => {
    console.log(err.stack || err.message)
    process.exit(1)
  })
