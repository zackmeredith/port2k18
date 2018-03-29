import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  font-family: "europa";
  line-height: 1;
  font-weight: 400;
  color: #595959;
  text-decoration: none;
  font-size: 16px;
  background-image: linear-gradient(140deg, rgba(255, 71, 77, 0), rgba(255, 71, 77, 0));
  transition: background-image .2s ease-out;

  &:hover {
    background-image: linear-gradient(140deg, rgba(255, 71, 77, 1), rgba(255, 71, 77, 1));
    padding-bottom: 2px;
    background-position: 0 100%;
    background-repeat: repeat-x;
    background-size: 8px 1px;
  }
`;

const Nav = () => (
  <div>
    <StyledLink to="/Work" style={{
      marginRight: '1rem',
    }}>
      Work
    </StyledLink>
    <StyledLink to="/Me">
      Me
    </StyledLink>
  </div>
)

export default Nav
