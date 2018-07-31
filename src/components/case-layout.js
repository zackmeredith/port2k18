import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
// import { StaticQuery, graphql } from 'gatsby'
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
  max-width: 960px;
  margin-bottom: 96px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  opacity: 0;
  animation: ${opacityAnim} .5s .15s ease-in-out forwards;
  animation-delay: .125s;
  padding: 0 2rem;

  @media (min-width: 700px) {
    padding: 0 4rem;
  }

  & .full-width, & .full-width > img {
    max-width: 1200px !important;
    width: calc(100% + 16rem);
    margin-left: calc(-8rem);
    margin-right: calc(-8rem);
  }

  & hr {
    border: 0,
    height: 1,
    width: '100%',
    marginTop: 16,
    marginBottom: 16,
    background: '#E6E1E1',
  }

  & h1 {
    font-family: "utopia-std", serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 1;
    margin-top: 16px;
    margin-bottom: 40px;
    color: black;
    ${'' /* transform: translateY(25%);
    animation: ${slideUp} 1.25s cubic-bezier(.5,0,0,1) forwards; */}

    @media (min-width: 700px) {
      font-size: 64px;
    }
  }

  & h2 {
    font-family: "Europa", serif;
    font-weight: 700;
    font-size: 32px;
    line-height: 1;
    margin-top: 40px;
    margin-bottom: 16px;
    color: black;

    @media (min-width: 700px) {
      font-size: 40px;
      margin-top: 48px;
    }
  }

  & h3 {
    font-family: "Europa", serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 1;
    margin-top: 40px;
    margin-bottom: 16px;
    color: black;

    @media (min-width: 700px) {
      font-size: 24px;
    }
  }

  & p {
    line-height: 1.5;
    font-family: europa;
    font-weight: 400;
    color: #666;
    font-size: 20px;
    margin-bottom: 24px;
  }

  & ul {
    margin-top: 0;
    margin-left: 40px;
    line-height: 1.25;
    font-family: europa;
    font-weight: 400;
    color: #666;
    font-size: 20px;
    margin-bottom: 40px;

    > li p {
      margin-bottom: 16px;
    }
  }

  & div > img {
    margin-bottom: 48px;
  }
`

const CaseLayout = ({ children, data }) => (
  <div>
    <Helmet
      title={'Zack Meredith — Designer'}
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

CaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CaseLayout
