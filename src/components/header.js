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
    transform: translate3d(0, 0, 0);
  }

  50%, 100% {
    transform: translate3d(-3rem, 0, 0);
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
      transition: transform .15s ease-in;
      transform: translate3d(-3rem, 0, 0);
      animation: ${dashAnim} .7s 1.25s cubic-bezier(.54,.09,.11,1) backwards;
    }

    @media (min-width: 700px) {
      &:hover {

        &:before {
          transform: translate3d(0, 0, 0);
        }
      }
    }

    /* &:focus {
      &:before {
        transform: translate3d(0, 0, 0);
      }
    } */
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
