import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const InvoiceInfoContainer = styled.table`
  font-size: 0.875em;

  td {
    padding: 4px 0;
  }
`

const ClientName = styled.td`
  font-size: 1.5em;
  vertical-align: top;
`

const InvoiceInfo = ({
  invoiceNumber,
  invoiceDate,
  clientName,
  companyName,
  companyEmail,
  addressStreet,
  addressCityStateZip,
}) => (
  <InvoiceInfoContainer>
    <tr>
      <ClientName rowSpan="2">
        {clientName}
      </ClientName>
      <td>
        {companyName}
      </td>
    </tr>
    <tr>
      <td>
        {addressStreet}
      </td>
    </tr>
    <tr>
      <td>
        Invoice Date: <strong>{invoiceDate}</strong>
      </td>
      <td>
        {addressCityStateZip}
      </td>
    </tr>
    <tr>
      <td>
        Invoice No: <strong>{invoiceNumber}</strong>
      </td>
      <td>
        {companyEmail}
      </td>
    </tr>
  </InvoiceInfoContainer>
)

InvoiceInfo.propTypes = {
  invoiceNumber: PropTypes.string.isRequired,
  invoiceDate: PropTypes.string.isRequired,
  clientName: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  companyEmail: PropTypes.string.isRequired,
  addressStreet: PropTypes.string.isRequired,
  addressCityStateZip: PropTypes.string.isRequired,
}

export default InvoiceInfo
