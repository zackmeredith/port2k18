import React from 'react'
import Link from 'gatsby-link'
import styled, { keyframes } from 'styled-components'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg) scale(1);
  }

  to {
    transform: rotate(360deg) scale(1);
  }
`

const opacityAnim = keyframes`
  0% {
    opacity: 0;
    transform: scale(.85);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
`

const AnimWrapper = styled.div`
  opacity: 0;
  transform: scale(.85);
  animation: ${opacityAnim} .35s .15s linear forwards;
`

const StyledLogo = styled.div`
  background-color: rgb(170, 207, 208);
  background-image: linear-gradient(140deg, rgb(247, 211, 167), rgb(255, 71, 77));
  height: 48px;
  width: 48px;
  border-radius: 100%;
  display: inline-block;
  transform-origin: center;
  animation: ${rotate360} 10s linear infinite;
`;

const Logo = () => (
  <Link to="/" style={{
    lineHeight: 1,
    display: 'block',
    fontSize: 0,
  }}>
    <AnimWrapper>
      <StyledLogo />
    </AnimWrapper>
  </Link>
)

export default Logo
