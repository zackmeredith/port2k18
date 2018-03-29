import React from 'react'
import styled, { keyframes } from 'styled-components'
import Logo from '../components/Logo'
import SocialList from '../components/SocialList'
import WorkList from '../components/WorkList'
// import Link from 'gatsby-link'

const opacityAnim = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

const squareBeforeAnim = keyframes`
  0% {
    opacity: 0;
    ${'' /* transform: scaleX(0); */}
  }

  100% {
    opacity: 1;
    ${'' /* transform: scaleX(1); */}
  }
`

const slideUp = keyframes`
  0% {
    transform: translateY(100%);
  }

  100% {
    transform: translateY(0);
  }
`

const squareAfterAnim = keyframes`
  0% {
    transform: translateX(-100%) scaleX(3);
    opacity: 1;
  }

  90% {
    transform: translateX(250%) scaleX(1);
    opacity: 1;
  }

  91% {
    transform: translateX(300%) scaleX(1);
    opacity: 0;
  }

  100% {
    transform: translateX(300%) scaleX(1);
    opacity: 0;
  }
`

const StyledAnchor = styled.a`
  color: #E6E1E1;
  padding-bottom: 2px;
  text-decoration: none;
  background-image: linear-gradient(140deg, rgb(255, 71, 77), rgb(255, 71, 77));
  background-position: 0 100%;
  background-repeat: repeat-x;
  background-size: 8px 1px;

  transition: color .15s ease-out;

  &:hover {
    color: #FF474D;
  }
`;

const StyledWrapper = styled.div`
  margin-top: 96px;
  margin-bottom: 96px;
  ${'' /* margin-left: auto; */}
  ${'' /* margin-right: auto; */}
  max-width: 600px;
  padding: 0 2rem;
  position: relative;
  opacity: 0;
  animation: ${opacityAnim} .5s .15s ease-in-out forwards;

  @media (min-width: 700px) {
    padding: 0 4rem;
  }

  &:before {
    content: '';
    position: absolute;
    top: -20%;
    z-index: -1;
    left: calc(55%);
    width: 150%;
    height: 150%;
    background-color: #f9fbfc;
    opacity: 0;
    ${'' /* transform: scaleX(0); */}
    ${'' /* transform-origin: right; */}
    animation: ${squareBeforeAnim} .75s 1.75s ease-in forwards;
  }

  &:after {
    content: '';
    position: absolute;
    top: -20%;
    z-index: 1;
    left: 0;
    width: 150%;
    height: 150%;
    background-color: #fff;
    transform: translateX(-100%) scaleX(3);
    animation: ${squareAfterAnim} 4.5s .15s cubic-bezier(.54,.09,.11,1) forwards;
  }
`;

const StyledTitle = styled.h1`
  font-family: "utopia-std", serif;
  font-weight: 700;
  font-size: 96px;
  line-height: 1;
  margin-bottom: 16px;
  color: black;
  transform: translateY(100%);
  animation: ${slideUp} 1.4s cubic-bezier(.54,.09,.11,1) forwards;
  animation-delay: 1s;
`

const StyledPara = styled.p`
  line-height: 1.5;
  font-family: "europa";
  font-weight: 400;
  color: #666;
  font-size: 16px;
  margin-bottom: 24px;
  transform: translateY(100%);
  animation: ${slideUp} 1.35s cubic-bezier(.5,.25,.11,1) forwards;
  animation-delay: 1.2s;
`

const IndexPage = () => (
  <div>

    <StyledWrapper>
      <StyledTitle>Hey<span style={{ }}>,</span><br/>I’m Zack</StyledTitle>
      <StyledPara>A San Francisco based designer and musician interested in building products for social good. If you’re interested in working together, shoot me an email <StyledAnchor href="mailto:zacharybmeredith@gmail.com">here</StyledAnchor>.
    </StyledPara>
      {/* <hr style={{
        border: 0,
        height: 1,
        width: 96,
        marginBottom: 32,
        background: "#E6E1E1",
      }} /> */}


      <SocialList />
    </StyledWrapper>

    {/* <WorkList /> */}

  </div>
)

export default IndexPage
