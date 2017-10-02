import React from 'react'
import PropTypes from 'prop-types'
import cssPropType from 'css-prop-type'

const Container = ({ children, maxWidth }) => (
  <div
    style={{
      margin: '0 auto',
      maxWidth,
      padding: '0px 1.0875rem 1.45rem',
    }}
  >
    {children}
  </div>
)

Container.propTypes = {
  children: PropTypes.node,
  maxWidth: cssPropType,
}

Container.defaultProps = {
  children: [],
  maxWidth: 960,
}

export default Container
