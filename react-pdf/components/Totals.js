import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import InvoiceTable from './InvoiceTable'

const PaymentInfo = styled.td`
  width: 38%;
  font-size: 0.75em;
  line-height: 1.5;
`

const Total = styled.td`
  color: #fb7578;
`

const Large = styled.span`
  font-size: 1.75em;
`

const Totals = ({
  accountNumber,
  routingNumber,
  dueDate,
  total,
}) => (
  <InvoiceTable
    hasBottomBorder
    headings={(
      <>
        <th>Payment Info</th>
        <th>Due By</th>
        <th>Total Due</th>
      </>
    )}
  >
    <tr>
      <PaymentInfo>
        <div>
          Account No: <strong>{accountNumber}</strong>
        </div>
        <div>
          Routing No: <strong>{routingNumber}</strong>
        </div>
      </PaymentInfo>
      <td><Large>{dueDate}</Large></td>
      <Total>
        <Large>
          <strong>{total}</strong>
        </Large>
      </Total>
    </tr>
  </InvoiceTable>
)

Totals.propTypes = {
  accountNumber: PropTypes.string.isRequired,
  routingNumber: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
}

export default Totals
