import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
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
    width: calc(100% + 4rem);
    margin-left: calc(-2rem);
    margin-right: calc(-2rem);
    margin-top: 64px;
    margin-bottom: 64px;

    @media (min-width: 700px) {
      width: calc(100% + 16rem);
      margin-left: calc(-8rem);
      margin-right: calc(-8rem);
    }
  }

  & .callout-card {
    padding: 24px;
    box-shadow: 0 4px 24px -2px rgba(0,0,0, 0.08);
    margin-top: 48px;
    margin-bottom: 48px;
    border-left: 4px solid rgb(255, 71, 77);

    ul {
      ${'' /* margin-left: 0; */}

    }

    & h3:first-child {
      margin-top: 0;
    }

    & ul:first-child {
      padding-top: 0;
    }

    & ul:last-child {
      margin-bottom: 0;
    }

    @media (min-width: 700px) {
      padding: 48px;
    }
  }

  & strong {
    color: #000;
  }

  & hr {
    border: 0;
    height: 1;
    width: '100%';
    margin-top: 16;
    margin-bottom: 16;
    background: '#E6E1E1';
  }

  & blockquote {
    margin-top: 48px;
    margin-right: 0;
    margin-bottom: 56px;
    margin-left: 0;
    border-left: 4px solid rgb(255, 71, 77);
    padding-left: 32px;


    @media (min-width: 700px) {
      margin-top: 72px;
      margin-bottom: 80px;
      padding-left: 48px;
    }

    p {
      font-size: 32px;
      line-height: 1.25;
      font-family: "utopia-std", serif;
      font-weight: 700;
      color: #000;

      @media (min-width: 700px) {
        font-size: 48px;
      }

    }
  }

  & h1 {
    font-family: "utopia-std", serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 1;
    margin-top: 32px;
    margin-bottom: 40px;
    color: black;
    ${'' /* transform: translateY(25%);
    animation: ${slideUp} 1.25s cubic-bezier(.5,0,0,1) forwards; */}

    @media (min-width: 700px) {
      font-size: 64px;
    }
  }

  & h2 {
    font-family: "Europa", sans-serif;
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
    font-family: "Europa", sans-serif;
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
    font-family: "Europa", sans-serif;
    font-weight: 400;
    color: #666;
    margin-bottom: 24px;
    font-size: 16px;

    @media (min-width: 700px) {
      font-size: 20px;
    }
  }

  & ul {
    margin-top: 0;
    margin-left: 40px;
    line-height: 1.25;
    font-family: "Europa", sans-serif;
    font-weight: 400;
    color: #666;
    margin-bottom: 40px;
    font-size: 16px;

    @media (min-width: 700px) {
      font-size: 20px;
    }

    > li p {
      margin-bottom: 16px;
    }
  }

  & div > img {
    margin-top: 24px;
    margin-bottom: 48px;
  }
`

const StyledLink = styled(Link)`
  font-family: "Europa", sans-serif;
  font-weight: 400;
  line-height: 1;
  display: block;
  margin: 80px 0;
  color: black;
  font-size: 20px;
  padding: 24px;
  border-radius: 4px;
  background-color: white;
  text-decoration: none;
  text-align: center;
  transform: translateY(0);
  transition: transform 0.3s cubic-bezier(.54,.09,.11,1);

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    box-shadow: 0 4px 16px 0 rgba(0,0,0,0.08);
    opacity: .5;
    transform: translateY(0);
    transition: opacity 0.3s cubic-bezier(.54,.09,.11,1), transform 0.3s cubic-bezier(.54,.09,.11,1);
  }

  &:hover {
    transform: translateY(-5%);

    &:before {
      opacity: 1;
      transform: translateY(2%);
    }
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
        <StyledLink to="/projects">Back to projects</StyledLink>
      </StyledWrapper>
    </div>
  </div>
)

CaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CaseLayout
