import React, { Component } from 'react'
import styled from 'styled-components'
let PortPDF ;

 class PortPDFWrapper extends Component {
  constructor () {
    super()
    this.state = { mount : false } //To rerender
  }
  componentDidMount () {
    //require.ensure([], function(require) {
    PortPDF = require("../components/PortPDF");
    //});
    this.setState( { mount : true }); //To rerender.
  }
  render () {
    if (PortPDF !== undefined ) {
      return (
        <PortPDF />
      )
    } else {
      return (
        null
      )
    }
  }
}

const StyledTitle = styled.h1`
  font-family: "utopia-std", serif;
  font-weight: 700;
  font-size: 48px;
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
  max-width: 640px;
  position: relative;
  padding: 0 2rem;

  @media (min-width: 700px) {
    padding: 0 4rem;
  }
`

const StyledWrapper = styled.div`
  padding-bottom: 6rem;
`

const StyledAnchor = styled.a`
  color: #FF474D;
  padding-bottom: 2px;
  text-decoration: none;
  background-image: linear-gradient(140deg, rgb(255, 71, 77), rgb(255, 71, 77));
  background-position: 0 100%;
  background-repeat: repeat-x;
  background-size: 8px 0px;

  transition: background-size .15s ease-out;

  &:hover {
    background-size: 8px 1px;
  }
`
const Port = () => (
  <StyledWrapper>
    <HeaderWrapper>
      <StyledTitle>Case studies — where ya at?</StyledTitle>
      <StyledPara>While this site is being refreshed I've included a static version of a keynote that I've used to present projects before. You can find visual/motion work on my <StyledAnchor target="_blank" href="https://dribbble.com/zackmeredith/">dribbble</StyledAnchor>. Feel free to dig through — if you'd like to hear the words that go along with this shoot me an email <StyledAnchor href="mailto:zacharybmeredith@gmail.com">here</StyledAnchor>.</StyledPara>
    </HeaderWrapper>
    <PortPDFWrapper />
  </StyledWrapper>
)

export default Port
