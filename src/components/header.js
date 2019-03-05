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
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-48px);
  }
`

const dashAnimR = keyframes`
  from {
    transform: translateX(-48px);
  }

  to {
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
    transform: translateX(0);
    animation: ${dashAnim} .35s cubic-bezier(.54,.09,.11,1) 1.5s forwards;
  }

  .no-delay &:before {
    animation-delay: 0 !important;
  }
  .no-no &:before {
    animation: ${dashAnim} .35s cubic-bezier(.54,.09,.11,1) 0s forwards;
  }

  /* .js-loading &:before {
    transform: translate3d(0, 0, 0);
  } */
`

const Nav = styled.nav`
  opacity: 0;
  animation: ${opacityAnim} .35s linear .15s forwards;

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
        animation: ${dashAnimR} .15s cubic-bezier(.54,.09,.11,1) forwards;
      }
    }
  }
`

const Header = () => {
  function out(e){
    document.body.classList.add('no-no');
    setTimeout(function() {
       document.body.classList.remove('no-delay');
       document.body.classList.remove('no-no');
     }, 1000);
  }
  function over(e){
    document.body.classList.add('no-delay');
  }
  return (
    <StyledWrapper>
      <Logo />
      <Nav id="main-nav" style={{
        display: 'flex',
        alignItems: 'center',
      }}>
        <Link id="work-link" to="/work"><NavItemInner onMouseOver={e => over(e)} onMouseOut={e => out(e)}>Work</NavItemInner></Link>
      </Nav>
    </StyledWrapper>
  )
}

if (typeof window !== `undefined`) {
  document.body.classList.add('js-loading');
  window.addEventListener('load', function () {
      document.body.classList.remove('js-loading');
  }, false);
}

export default Header
