# HTML invoice template

This repo contains an HTML invoice template you can customize to fit your business needs.

The template is meant to be used either in a browser, or rendered as a PDF with Anvil's [HTML to PDF API](https://www.useanvil.com/docs/api/generate-pdf#html--css-to-pdf).

Here it is rendered in a browser:

<img width="772" alt="HTML invoice template" src="https://user-images.githubusercontent.com/69169/115467239-0ac27c00-a1e6-11eb-836b-190bf0ab264d.png" />

And rendered as a PDF via the HTML to PDF API:

<img width="744" alt="HTML to PDF invoice" src="https://user-images.githubusercontent.com/69169/115467145-e5357280-a1e5-11eb-942b-2e1a0361252b.png" />

## Rendering as a PDF

You can render the invoice with vanilla HTML and CSS or with React and styled-components. For use with React, see the [react-pdf](./react-pdf/README.md) directory.

First [sign up](https://app.useanvil.com/signup) for Anvil and get your [API key](https://www.useanvil.com/docs/api/getting-started#api-key).

There is an [example node script](./generate-pdf.js) you can use to generate the PDF from vanilla HTML and CSS.  then run the following command at the root of this repo

```sh
$ ANVIL_API_TOKEN=<YOURKEY> node ./generate-pdf.js && open ./generate.output.pdf
```

Vanilla HTML and CSS for the invoice template is in the root of this repo. Feel free to view and edit these files to change the output PDF:

* [invoice.html](./invoice.html) - the invoice's HTML
* [invoice.css](./invoice.css) - the invoice's CSS
* [invoice-pdf.css](./invoice-pdf.css) - the invoice's PDF-specific CSS

The script simply reads the HTML and CSS from this repo, then generates a PDF.

```js
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
  }
}
const exampleData = buildHTMLToPDFPayload()
const { statusCode, data, errors } = await client.generatePDF(exampleData)
```

## Running in a browser

Just get a server running at the root of this repo, and visit `index.html`. e.g.

```sh
python -m SimpleHTTPServer 8080
```

Visit http://localhost:8080

See [index.html](https://github.com/anvilco/html-pdf-invoice-template/blob/main/index.html) for more information

## License

MIT
