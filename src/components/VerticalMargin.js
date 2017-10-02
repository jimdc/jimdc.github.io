import React from 'react'
import PropTypes from 'prop-types'
import cssPropType from 'css-prop-type'

const VerticalMargin = ({ children, top, bottom }) => (
  <div
    style={{
      marginTop: top,
      marginBottom: bottom,
    }}
  >
    {children}
  </div>
)

VerticalMargin.propTypes = {
  children: PropTypes.node,
  bottom: cssPropType,
  top: cssPropType,
}

VerticalMargin.defaultProps = {
  children: [],
  bottom: 0,
  top: 0,
}

export default VerticalMargin
