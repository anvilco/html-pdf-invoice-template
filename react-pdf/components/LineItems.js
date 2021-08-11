import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import InvoiceTable from './InvoiceTable'

const Quantity = styled.th`
  width: 50px;
`

const Description = styled.th`
`

const Price = styled.th`
  text-align: right;
  width: 100px;
`

const Subtotal = styled.th`
  width: 100px;
`

const RightAlignedCell = styled.td`
  text-align: right;
`

const LineItems = ({
  items
}) => (
  <InvoiceTable
    headings={(
      <>
        <Quantity>Qty</Quantity>
        <Description>Description</Description>
        <Price>Price</Price>
        <Subtotal>Subtotal</Subtotal>
      </>
    )}
  >
    {items.map((item, i) => (
      <tr key={item.description + i}>
        <td>{item.quantity}</td>
        <td>{item.description}</td>
        <RightAlignedCell>{item.price}</RightAlignedCell>
        <td><strong>{item.subtotal}</strong></td>
      </tr>
    ))}
  </InvoiceTable>
)

LineItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    quantity: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    subtotal: PropTypes.string.isRequired,
  })).isRequired,
}

export default LineItems
