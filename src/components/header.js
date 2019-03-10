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
    transform-style: preserve-3d;
    will-change: transform;
    transform: translate3d(0, 0, 0);
    transition: transform .35s cubic-bezier(.54,.09,.11,1);
  }

  .lag-p &:before {
    transform: translate3d(-48px, 0, 0);
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
        transition: transform .15s cubic-bezier(.54,.09,.11,1);
        transform: translate3d(0, 0, 0);
      }
    }
  }
`

if (typeof window !== `undefined`) {
  document.body.classList.add('js-loading');

  window.addEventListener('load', function () {
    document.body.classList.remove('js-loading');
  }, false);
}

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
