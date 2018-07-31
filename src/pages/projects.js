import React from 'react'
import styled from 'styled-components'
import PageLayout from '../components/page-layout'
import WorkList from '../components/WorkList'

const StyledTitle = styled.h1`
  font-family: "utopia-std", serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 1;
  margin-bottom: 16px;
  color: black;

  @media (min-width: 700px) {
    font-size: 64px;
  }
`

const StyledPara = styled.p`
  line-height: 1.5;
  font-family: europa;
  font-weight: 400;
  color: #666;
  font-size: 16px;
  margin-bottom: 24px;
`

const HeaderWrapper = styled.div`
  margin-top: 96px;
  margin-bottom: 96px;
  max-width: 600px;
  padding-right: 2rem;
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
  background-image: linear-gradient(140deg, rgb(255, 71, 77), rgb(255, 71, 77));
  background-position: 0 100%;
  background-repeat: repeat-x;
  background-size: 8px 0px;
  ${'' /* transition: background-size .25s ease-in-out; */}

  &:hover {
    background-size: 8px 1px;
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
