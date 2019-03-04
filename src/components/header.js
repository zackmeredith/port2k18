import React from 'react'
import { Link } from 'gatsby'
import Logo from './Logo'
import styled, { keyframes } from 'styled-components'

const opacityAnim = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

const dashAnim = keyframes`
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-3rem);
  }
`

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

const Nav = styled.nav`
  opacity: 0;
  animation: ${opacityAnim} .35s .15s linear forwards;

  & a {
    color: #000;
    font-family: "utopia-std", sans-serif;
    font-weight: 400;
    line-height: 1;
    font-size: 1rem;
    height: 100%;
    text-decoration: none;
    position: relative;

    &:before {
      content: ' ';
      position: absolute;
      display: block;
      left: 0;
      right: 0;
      top: 50%;
      bottom: 0;
      width: 100%;
      background-color: #FF474E;
      height: 1px;
      z-index: 1;
      transition: all .15s ease-in;
      transform: translateX(-3rem);
      animation: ${dashAnim} .35s 1.25s cubic-bezier(.54,.09,.11,1) backwards;
    }

    &:hover {

      &:before {
        transform: translateX(0);
      }
    }
  }
`

const Header = () => (
  <StyledWrapper>
    <Logo />
    <Nav style={{
      display: 'flex',
      alignItems: 'center',
    }}>
      <Link to="/work">Work</Link>
    </Nav>
  </StyledWrapper>
)

export default Header
