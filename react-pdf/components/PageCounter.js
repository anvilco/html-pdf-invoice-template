import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import GlobalStyle from './GlobalStyle'

const PageCounterContainer = styled.div`
  display: block;
  position: running(pageContainer);
  margin-top: -25px;
  font-size: 12px;
  text-align: right;
  color: #999;
`

// This will be filled when generating the PDF
const CurrentPage = styled.span`
  &::after {
    content: counter(page);
  }
`

// This will be filled when generating the PDF
const TotalPages = styled.span`
  &::after {
    content: counter(pages);
  }
`

// The `content` here references `position` from the PageCounterContainer
const FooterPlacement = createGlobalStyle`
  @page {
    @bottom-right {
      content: element(pageContainer);
    }
  }
`

const PageCounter = () => (
  <PageCounterContainer>
    <FooterPlacement />
    Page <CurrentPage /> of <TotalPages />
  </PageCounterContainer>
)

export default PageCounter
