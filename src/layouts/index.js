import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import metadata from '../../metadata'

import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title={metadata.title} />
    <main>{children()}</main>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

TemplateWrapper.defaultProps = {
  children: () => {},
}

export default TemplateWrapper
