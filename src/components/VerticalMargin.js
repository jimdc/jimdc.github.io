import React from 'react'
import PropTypes from 'prop-types'

const VerticalMargin = ({ children, top, bottom }) => (
  <div style={{
    marginTop: top,
    marginBottom: bottom,
  }}>
    { children }
  </div>
)

const cssUnitType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
])

VerticalMargin.propTypes = {
  children: PropTypes.node,
  bottom: cssUnitType,
  top: cssUnitType,
}

export default VerticalMargin