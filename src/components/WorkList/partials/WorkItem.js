import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

// const gradientStyles = css`
//   background-image: ${props => (
//     (props.brand === "pivotus" && 'linear-gradient(-108deg, rgba(148,220,181,0.80) 1%, rgba(148,220,181,0.87) 48%, rgba(130,194,160,0.95) 100%)')
//     || (props.brand === "nrdc" && 'linear-gradient(-108deg, rgba(52,94,179,0.80) 1%, rgba(30,54,102,0.87) 47%, rgba(22,40,76,0.95) 100%);')
//     || (props.brand === "famis" && 'linear-gradient(-108deg, rgba(252,48,51,0.80) 1%, rgba(224,42,46,0.87) 47%, rgba(191,36,39,0.95) 100%);')
//   )};
// `

// const BrandCircle = styled.div`
//   height: 16px;
//   width: 16px;
//   border-radius: 100%;
//   ${gradientStyles};
// `

const StyledLink = styled(Link)`
  & .img-container {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      width: calc(100%);
      height: 100%;
      ${'' /* background-image: linear-gradient(140deg,rgb(247,211,167),rgb(255,71,77)); */}
      background-color: #f9fbfc;
      opacity: 0;
      transition: opacity 0.5s cubic-bezier(.54,.09,.11,1);
    }
  }

  &:hover {
    & .img-container:before {
      opacity: .7;
    }
  }
`

const ItemWrapper = styled.div`
  width: 100%;
  margin-bottom: 32px;
  ${'' /* border: 1px solid #f9f9f9; */}
  border-radius: 2px;
  overflow: hidden;
  transition: border-color .15s ease-out;

  @media (min-width: 700px) {
    width: ${props => props.fullWide ? '100%' : 'calc(50% - 16px)'};
  }
`

const BaseWorkItem = ({ image, title, type, brand, link, fullWide }) => (
  <ItemWrapper fullWide={fullWide}>
    <div>
        <div className={'img-container'}>
          <img style={{marginBottom: 0, flex: 1, display: 'block', height: 'auto' }} src={image} alt={'cover'}/>
        </div>

        <div style={{
          padding: '24px 0',
          flex: 3,
          width: '100%',
        }}>
        <h3 style={{ fontFamily: 'Europa', marginBottom: 0, fontSize: 16, fontWeight: 700 }}>{title}</h3>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', }}>

            <span style={{
              fontFamily: 'europa',
              fontSize: '12px',
              color: '#999',
              fontWeight: '400',
            }}>{ type }</span>
            {/* <BrandCircle brand={brand} /> */}
          </div>


        </div>
      </div>
  </ItemWrapper>
)

const WorkItem = ({link, ...props}) => {
  if (link) {
    return (
      <StyledLink to={link} style={{
        width: '100%',
        height: '100%',
        display: 'block',
        color: 'black',
        textDecoration: 'none',
        position: 'relative',
      }}>
        <BaseWorkItem {...props} />
      </StyledLink>
    )
  }
    return <BaseWorkItem {...props} />;
}

export default WorkItem
