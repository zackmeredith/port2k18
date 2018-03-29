import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import WebFont from 'webfontloader';

import Header from '../components/Header'
// import Footer from '../components/Footer'
import './index.css'

class TemplateWrapper extends React.Component {
  constructor(props){
    super(props)
  }

 componentDidMount = () => {
    WebFont.load({
      typekit: {
        id: 'bav5xck'
      }
    });
  }

 render () {
   return (
     <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
       <Helmet
         title="Zack Meredith — Designer"
         meta={[
           { name: 'description', content: 'Sample' },
           { name: 'keywords', content: 'sample, something' },
         ]}
       />
       <Header />
       <div
         style={{

         }}
       >
         { this.props.children() }
       </div>
       {/* <Footer /> */}
     </div>
   )
 }
}
// const TemplateWrapper = ({ children }) => (
//   <div>
//     <Helmet
//       title="Gatsby Default Starter"
//       meta={[
//         { name: 'description', content: 'Sample' },
//         { name: 'keywords', content: 'sample, something' },
//       ]}
//     />
//     bav5xck
//     <Header />
//     <div
//       style={{
//
//       }}
//     >
//       {children()}
//     </div>
//   </div>
// )

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
