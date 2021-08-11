 // Generate a PDF from the HTML code in this repo.
//
// Usage:
// ANVIL_API_TOKEN=your_token yarn react:generate-pdf && open ./generate-react.output.pdf

import fs from 'fs'
import path from 'path'
import Anvil from '@anvilco/anvil'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'

import Invoice from './components/Invoice'

const apiKey = process.env.ANVIL_API_TOKEN

function buildHTMLToPDFPayload () {
  const sheet = new ServerStyleSheet()
  const html = ReactDOMServer.renderToStaticMarkup(
    sheet.collectStyles(
      <Invoice />
    )
  )
  const css = sheet.instance.toString()
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
