import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Document, Page } from 'react-pdf/dist/entry.webpack'
import throttle from "lodash.throttle"
import portFile from '../img/port/port.pdf'

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

class PortPDFWrapper extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
    width: null,
    pagesRendered: null,
  }

  componentDidMount () {
    this.setDivSize()
    window.addEventListener("resize", throttle(this.setDivSize, 500))
  }

  componentWillUnmount () {
    window.removeEventListener("resize", throttle(this.setDivSize, 500))
  }

  setDivSize = () => {
    this.setState({width: this.pdfWrapper.getBoundingClientRect().width})
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({
      numPages,
      pagesRendered: 0,
    });

  }

  renderPDF = () => {
    Array.from(
      new Array(numPages),
      (el, index) => (
        <div style={{ boxShadow: '0 12px 24px 0 rgba(0,0,0,.07)', marginBottom: '2rem' }}>
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            width={this.state.width}
          />
        </div>
      ),
    )
  }

  onRenderSuccess = () =>
  this.setState(prevState => ({
    pagesRendered: prevState.pagesRendered + 1,
  }));

  render() {
    const { pageNumber, numPages, width, pagesRendered } = this.state;

  /**
    * The amount of pages we want to render now. Always 2 more than already rendered,
    * no more than total amount of pages in the document.
    */
    const pagesRenderedPlusOne = Math.min(pagesRendered + 2, numPages);

    return (
      <div style={{ overflowY: "hidden", overflowX: 'auto', padding: '0 2rem', margin: '-1rem' }}>
        <div id="row" style={{display: "flex"}}>
          {/* <div id="placeholderWrapper" style={{width: "10vw", height: "100vh"}}/> */}
          <div id="pdfWrapper" style={{width: "100%", height: '100%'}} ref={(ref) => this.pdfWrapper = ref}>
              <Document
                file={portFile}
                onLoadSuccess={this.onDocumentLoad}
              >
                <div>
                {
                  Array.from(
                  new Array(pagesRenderedPlusOne),
                  (el, index) => {
                    const isCurrentlyRendering = pagesRenderedPlusOne === index + 1;
                    const isLastPage = numPages === index + 1;
                    const needsCallbackToRenderNextPage = isCurrentlyRendering && !isLastPage;

                    return (
                      <div style={{ boxShadow: '0 12px 24px 0 rgba(0,0,0,.07)', marginBottom: '2rem' }}>
                        <Page
                          key={`page_${index + 1}`}
                          onRenderSuccess={
                            needsCallbackToRenderNextPage ? this.onRenderSuccess : null
                          }
                          pageNumber={index + 1}
                          width={this.state.width}
                        />
                      </div>
                    );
                  },
                )
                }
              </div>
              </Document>
          </div>
        </div>
      </div>
    );
  }
}

const Port = () => (
  <StyledWrapper>
    <HeaderWrapper>
      <StyledTitle>Case studies — where ya at?</StyledTitle>
      <StyledPara>While this site is being refreshed I've included a static version of a keynote that I've used to present projects before. You can find visual/motion work on my <StyledAnchor target="_blank" href="https://dribbble.com/zackmeredith/">dribbble</StyledAnchor>. Feel free to dig through — if you'd like to hear the words that go along with this shoot me an email <StyledAnchor href="mailto:zacharybmeredith@gmail.com">here</StyledAnchor>.</StyledPara>
      {/* <Link to="/">Take me back home</Link> */}
    </HeaderWrapper>
    <PortPDFWrapper />
  </StyledWrapper>
)

export default Port
