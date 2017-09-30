import React from 'react'
import PropTypes from 'prop-types'

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

const cssUnitType = PropTypes.oneOfType([PropTypes.number, PropTypes.string])

VerticalMargin.propTypes = {
  children: PropTypes.node,
  bottom: cssUnitType,
  top: cssUnitType,
}

VerticalMargin.defaultProps = {
  children: [],
  bottom: 0,
  top: 0,
}

export default VerticalMargin
