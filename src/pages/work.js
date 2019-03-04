import React from 'react'
import styled from 'styled-components'
import PageLayout from '../components/page-layout'
import WorkList from '../components/WorkList'

const StyledTitle = styled.h1`
  font-family: "utopia-std", serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 1;
  margin-top: 32px;
  color: black;

  @media (min-width: 700px) {
    font-size: 64px;
  }
`

const StyledPara = styled.p`
  line-height: 1.5;
  font-family: "Europa", sans-serif;
  font-weight: 400;
  color: #666;
  font-size: 16px;
  margin-bottom: 24px;
`

const HeaderWrapper = styled.div`
  margin-top: 96px;
  margin-bottom: 96px;
  max-width: 540px;
  position: relative;
`

const StyledWrapper = styled.div`
  padding: 0 2rem;

  @media (min-width: 700px) {
    padding: 0 4rem;
  }
  ${'' /* padding-bottom: 6rem; */}
`

const StyledAnchor = styled.a`
  color: #FF474D;
  padding-bottom: 2px;
  text-decoration: none;
  position: relative;

  &:after {
    content: ' ';
    position: absolute;
    display: block;
    left: .5px;
    right: 0;
    top: 100%;
    bottom: 0;
    width: 100%;
    background-color: #FF474E;
    height: 1px;
    z-index: 1;
    transition: all .15s ease-in;
    transform: translateY(0px);
  }

  &:hover {

    &:after {
      transform: translateY(2px);
    }
  }
`

const Port = () => (
  <PageLayout>
    <StyledWrapper>
      <HeaderWrapper>
        <StyledTitle>Projects</StyledTitle>
        <StyledPara>I'm a generalist, technical product designer that loves working on everything from high level product strategy to fine tuning animations or systems design. If you’re interested in working together, shoot me an email <StyledAnchor href="mailto:zacharybmeredith@gmail.com">here</StyledAnchor>.</StyledPara>
      </HeaderWrapper>
      <WorkList />
    </StyledWrapper>
  </PageLayout>
)

export default Port
