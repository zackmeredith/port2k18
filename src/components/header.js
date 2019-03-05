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

  100% {
    transform: translate3d(-3rem, 0, 0);
  }
`
const dashAnimR = keyframes`
  0% {
    transform: translate3d(-3rem, 0, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
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
    transform: translate3d(0, 0, 0);
    animation: ${dashAnim} .35s cubic-bezier(.54,.09,.11,1) forwards;
    animation-delay: 1.5s;

    .no-delay & {
      animation-delay: 0;
    }
  }

  /* .js-loading &:before {
    transform: translate3d(0, 0, 0);
  } */
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
    padding: 1rem;
    text-decoration: none;

    &:hover {
      & ${NavItemInner}:before {
        animation: ${dashAnimR} .15s cubic-bezier(.54,.09,.11,1) forwards;
        animation-delay: 0;
      }
    }
  }
`

const Header = () => {
  function over(e){
    document.body.classList.add('no-delay');
    setTimeout(function() {
       document.body.classList.remove('no-delay');
     }, 500);
  }
  return (
    <StyledWrapper>
      <Logo />
      <Nav id="main-nav" style={{
        display: 'flex',
        alignItems: 'center',
      }}>
        <Link id="work-link" onMouseOver={e => over(e)} to="/work"><NavItemInner>Work</NavItemInner></Link>
      </Nav>
    </StyledWrapper>
  )
}

if (typeof window !== `undefined`) {
  document.body.classList.add('js-loading');
  window.addEventListener('load', function () {
    // const workLink = document.getElementById('work-link');

    // if (workLink) {
    //   workLink.addEventListener('mouseout', function(e) {
    //   //
    //     e.target.classList.add('no-delay');
    //     console.log('hello');
    //     // reset after a short delay
    //     setTimeout(function() {
    //       e.target.classList.remove('no-delay');
    //     }, 500);
      // }, false);
    // } 

    window.setTimeout(() => {
      document.body.classList.remove('js-loading');
    }, 0);
  }, false);
}

export default Header
