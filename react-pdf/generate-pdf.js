// Generate a PDF from the HTML code in this repo.
//
// Usage:
// ANVIL_API_TOKEN=<YOURKEY> node ./generate-pdf.js && open ./generate-react.output.pdf
// ANVIL_API_TOKEN=gi5bFQRzJ6h7Hp3pphsYbF3QtXNm3Vb9 node ./react-pdf/generate-pdf.js && open ./generate-react.output.pdf

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Invoice from './components/Invoice'

import fs from 'fs'
import path from 'path'
import Anvil from '@anvilco/anvil'

const apiKey = process.env.ANVIL_API_TOKEN

function buildHTMLToPDFPayload () {
  const css = ''
  console.log(ReactDOMServer)
  const html = ReactDOMServer.renderToStaticMarkup(
    <Invoice />
  )
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
    const outputFilePath = path.join(scriptDir, '..', 'generate-react.output.pdf')
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
