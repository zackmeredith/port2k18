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
    transform: translateX(-48px);
  }
`

const dashAnimR = keyframes`
  0% {
    transform: translateX(-48px);
  }

  100% {
    transform: translateX(0);
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

const NavItemInner = styled.div`
  position: relative;
  pointer-events: none;

  &:before {
    content: '';
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
    animation: .35s cubic-bezier(.54,.09,.11,1) forwards ${dashAnim};
  }

  .lag-o &:before {
    animation-delay: 1.5s;
  }

`

const Nav = styled.nav`
  opacity: 0;
  animation: .35s linear .15s forwards ${opacityAnim};

  & a {
    color: #000;
    font-family: "utopia-std", sans-serif;
    font-weight: 400;
    line-height: 1;
    font-size: 1rem;
    height: 100%;
    padding: 1rem;
    text-decoration: none;

    &:hover {
      ${NavItemInner}:before {
        animation: .15s cubic-bezier(.54,.09,.11,1) forwards ${dashAnimR};
      }
    }
  }
`

const Header = () => {
  return (
    <StyledWrapper>
      <Logo />
      <Nav id="main-nav" style={{
        display: 'flex',
        alignItems: 'center',
      }}>
        <Link id="work-link" to="/work"><NavItemInner>Work</NavItemInner></Link>
      </Nav>
    </StyledWrapper>
  )
}

export default Header
