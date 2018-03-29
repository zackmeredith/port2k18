import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div style={{
    fontFamily: "europa",
    fontSize: 12,
  }}>
    &copy; {new Date().getFullYear()}
  </div>
)

export default Header
