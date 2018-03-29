import React from 'react'
import Link from 'gatsby-link'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faTwitter, faDribbble, faGithub, faInstagram, faCodepen, faLinkedin } from '@fortawesome/fontawesome-free-brands'
import styled, { keyframes } from 'styled-components'


const slideUp = keyframes`
  0% {
    transform: translateY(150%);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

const SocialListItem = styled.li`
  margin-right: 1rem;
  transform: translateY(150%);
  opacity: 0;
  animation: ${slideUp} .5s cubic-bezier(.54,.09,.11,1) forwards;
`

const StyledAnchor = styled.a`
  color: #EBECED;
  padding: 8px 4px;
  margin-left: -4px;
  transition: color .2s ease-out;

  &:hover {
    color: #FF474D;
  }
`;

const SocialList = () => (
  <div>
    <ul className="social-list" style={{
      listStyle: 'none',
      paddingLeft: 0,
      marginLeft: 0,
      marginBottom: 0,
      display: 'flex',
    }}>
      <SocialListItem style={{
        animationDelay: '1.6s',
      }}>
        <StyledAnchor href="https://twitter.com/zackmeredith" target="_blank"><FontAwesomeIcon icon={faTwitter} /></StyledAnchor>
      </SocialListItem>
      <SocialListItem style={{
        animationDelay: '1.65s',
      }}>
        <StyledAnchor href="https://dribbble.com/zackmeredith/" target="_blank"><FontAwesomeIcon icon={faDribbble} /></StyledAnchor>
      </SocialListItem>
      <SocialListItem style={{
        animationDelay: '1.7s',
      }}>
        <StyledAnchor href="https://www.linkedin.com/in/zack-meredith/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></StyledAnchor>
      </SocialListItem>
      <SocialListItem style={{
        animationDelay: '1.75s',
      }}>
        <StyledAnchor href="https://github.com/zackmeredith/" target="_blank"><FontAwesomeIcon icon={faGithub} /></StyledAnchor>
      </SocialListItem>
      <SocialListItem style={{
        animationDelay: '1.8s',
      }}>
        <StyledAnchor href="https://instagram.com/zackmeredith/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></StyledAnchor>
      </SocialListItem>
      <SocialListItem style={{
        animationDelay: '1.85s',
      }}>
        <StyledAnchor href="https://codepen.io/zackmeredith/" target="_blank"><FontAwesomeIcon icon={faCodepen} /></StyledAnchor>
      </SocialListItem>

    </ul>
  </div>
)

export default SocialList
