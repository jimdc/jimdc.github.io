import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import metadata from '../../metadata'

import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title={metadata.title}
    />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 512,
        padding: '0px 1.0875rem 1.45rem',
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
