import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

const StyledWrapper = styled.div`
  max-width: 600px;
  margin-top: 96px;
  margin-bottom: 96px;
  position: relative;
  padding: 0 2rem;

  @media (min-width: 700px) {
    padding: 0 4rem;
  }
`

const StyledTitle = styled.h1`
  font-family: "utopia-std", serif;
  font-weight: 700;
  font-size: 72px;
  line-height: 1;
  margin-bottom: 16px;
  color: black;

  @media (min-width: 700px) {
    font-size: 64px;
  }
`

const StyledPara = styled.p`
  line-height: 1.5;
  font-family: europa;
  font-weight: 400;
  color: #666;
  font-size: 16px;
  margin-bottom: 24px;
`

const NotFoundPage = () => (
  <Layout>
    <StyledWrapper>
      <StyledTitle>Well —<br /> that's not right</StyledTitle>
      <StyledPara>You just hit a route that doesn&#39;t exist. Click that pretty circle above to go back home.</StyledPara>
    </StyledWrapper>
  </Layout>
)

export default NotFoundPage
