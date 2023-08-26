# React to PDF Invoice

This example uses React and styled-components to generate an invoice PDF via Anvil's [HTML to PDF API](https://www.useanvil.com/docs/api/generate-pdf#html--css-to-pdf). You can use this as a jumping off point to generate a PDF with your own custom React / styled-components code via.

To run it, `yarn install` at the root of this repo, then run:

```sh
ANVIL_API_TOKEN=your_token yarn generate-pdf:react && open ./generate-react.output.pdf
```

See the [generate-pdf.js](./generate-pdf.js) script, and `components` directory here for the code.

<img width="754" alt="React to HTML to PDF" src="https://user-images.githubusercontent.com/69169/129096427-c32ed4f1-bb7b-4bda-86df-830f9f18a690.png">
