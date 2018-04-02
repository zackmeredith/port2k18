import React, { Component } from 'react'
import { render } from 'react-dom'
import { Document, Page } from 'react-pdf/dist/entry.webpack'
import throttle from 'lodash.throttle'
import portFile from '../../img/port/port.pdf'

class PortPDF extends Component {
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

  onRenderSuccess = () =>
  this.setState(prevState => ({
    pagesRendered: prevState.pagesRendered + 1,
  }));

  render() {
    const { pageNumber, numPages, width, pagesRendered } = this.state;

  /**
    * The amount of pages we want to render now. Always 1 more than already rendered,
    * no more than total amount of pages in the document.
    */
    const pagesRenderedPlusOne = Math.min(pagesRendered + 1, numPages);

    return (
      <div style={{ overflowY: "hidden", overflowX: 'auto', padding: '0 2rem', margin: '-1rem' }}>
        <div id="row" style={{display: "flex"}}>
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

export default PortPDF
