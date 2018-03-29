import React from 'react'
import Link from 'gatsby-link'
import styled, { css, keyframes } from 'styled-components'

const gradientStyles = css`
  background-image: ${props => (
    (props.brand === "pivotus" && 'linear-gradient(-108deg, rgba(148,220,181,0.80) 1%, rgba(148,220,181,0.87) 48%, rgba(130,194,160,0.95) 100%)')
    || (props.brand === "nrdc" && 'linear-gradient(-108deg, rgba(52,94,179,0.80) 1%, rgba(30,54,102,0.87) 47%, rgba(22,40,76,0.95) 100%);')
    || (props.brand === "famis" && 'linear-gradient(-108deg, rgba(252,48,51,0.80) 1%, rgba(224,42,46,0.87) 47%, rgba(191,36,39,0.95) 100%);')
  )};
`

const BrandCircle = styled.div`
  height: 16px;
  width: 16px;
  border-radius: 100%;
  ${gradientStyles};
`

const ItemWrapper = styled.div`
  width: calc(50% - 16px);
  margin-bottom: 32px;
  border: 1px solid #f9f9f9;
  border-radius: 2px;
  overflow: hidden;
  transition: border-color .15s ease-out;
`

const WorkItem = ({ image, title, type, brand, link }) => (
  <ItemWrapper>
    <Link to={link} style={{
      width: '100%',
      height: '100%',
      display: 'block',
      color: 'black',
      textDecoration: 'none',
    }}>

    <img style={{marginBottom: 0, width: '100%', display: 'block', height: 'auto'}} src={image} />


        {/* <div style={{
          padding: '24px 16px',

        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
            <h3 style={{ fontFamily: 'europa', marginBottom: 0, fontSize: 20, fontWeight: 400 }}>{title}</h3>
            <BrandCircle brand={brand} />
          </div>


          <span style={{
            fontFamily: 'europa',
            fontSize: '16px',
            fontWeight: '700',
            color: '#999',
            fontWeight: 400,
          }}>{ type }</span>

        </div> */}


    </Link>
  </ItemWrapper>
)

export default WorkItem
