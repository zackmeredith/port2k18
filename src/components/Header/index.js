import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Logo from '../Logo'
import Nav from '../Nav'

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 3.5rem 2rem;

  @media (min-width: 700px) {
    padding: 3.5rem 4rem;
  }
`

const Header = () => (
  <StyledWrapper>
    <Logo />
    {/* <Nav /> */}
  </StyledWrapper>
)

export default Header
