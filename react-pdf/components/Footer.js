import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import GlobalStyle from './GlobalStyle'

const FooterContainer = styled.div`
  margin-top: 30px;
`

const Thanks = styled.div`
  font-size: 1.125em;

  img {
    display: inline-block;
    position: relative;
    top: 1px;
    width: 16px;
    margin-right: 4px;
  }
`

const Info = styled.div`
  position: running(footer);
  margin-top: -25px;
  font-size: 0.75em;
  color: #ccc;

  span {
    padding: 0 5px;
    color: black;

    &:last-child {
      padding-right: 0;
    }
  }
`

// The `content` here references `position` from the FooterContainer
const FooterPlacement = createGlobalStyle`
  @page {
    @bottom-left {
      content: element(footer);
    }
  }
`

const Footer = () => (
  <FooterContainer>
    <FooterPlacement />
    <Info>
      <span>hello@useanvil.com</span>|{' '}
      <span>555 444 6666</span> |{' '}
      <span>useanvil.com</span>
    </Info>
    <Thanks>
      <img src="https://github.com/anvilco/html-pdf-invoice-template/raw/main/img/heart.png" alt="heart" />
      <span>Thank you!</span>
    </Thanks>
  </FooterContainer>
)

export default Footer
