import React from 'react'
import styled from 'styled-components'

import GlobalStyle from './GlobalStyle'
import Logo from './Logo'
import PageCounter from './PageCounter'
import InvoiceInfo from './InvoiceInfo'
import LineItems from './LineItems'
import Totals from './Totals'
import Footer from './Footer'

const Container = styled.div`
`

const lineItems = [
  {
    quantity: '2',
    description: 'Blue large widgets',
    price: '$15.00',
    subtotal: '$30.00',
  },
  {
    quantity: '4',
    description: 'Green medium widgets',
    price: '$10.00',
    subtotal: '$40.00',
  },
  {
    quantity: '5',
    description: 'Red small widgets with logo',
    price: '$7.00',
    subtotal: '$35.00',
  },
]

const Invoice = () => (
  <Container>
    <GlobalStyle />
    <PageCounter />
    <Logo />
    <InvoiceInfo
      invoiceNumber="12345"
      invoiceDate="May 24th, 2024"
      clientName="Client Name"
      companyName="Anvil Co"
      companyEmail="hello@useanvil.com"
      addressStreet="123 Main Street"
      addressCityStateZip="San Francisco CA, 94103"
    />

    <LineItems
      items={lineItems}
    />

    <Totals
      accountNumber="123567744"
      routingNumber="120000547"
      dueDate="May 30th, 2024"
      total="$105.00"
    />

    <Footer />
  </Container>
)

export default Invoice
