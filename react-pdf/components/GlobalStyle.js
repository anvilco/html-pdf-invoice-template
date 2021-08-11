import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 16px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  table tr td {
    padding: 0;
  }

  table tr td:last-child {
    text-align: right;
  }
`

export default GlobalStyle
