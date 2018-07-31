import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { keyframes } from 'styled-components'
import Header from './header'
import './layout.css'

const opacityAnim = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`
const StyledWrapper = styled.div`
  opacity: 0;
  animation: ${opacityAnim} .5s .15s ease-in-out forwards;
  animation-delay: .5s;
`

const PageLayout = ({ location, children, data }) => (
  <div>
    <Helmet
      title={'Projects'}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}
    >
      <Header />
      <StyledWrapper>
        {children}
      </StyledWrapper>
    </div>
  </div>
)

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout
