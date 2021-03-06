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

const rotate3602 = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }

  50% {
    transform: rotate(180deg) scale(1.05);
  }

  100% {
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
  animation: ${opacityAnim} .35s linear forwards;
  animation-play-state: running !important;
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

  &:hover {
    animation: ${rotate3602} 2s ease-in infinite;
  }
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
