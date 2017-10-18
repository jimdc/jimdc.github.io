import React from 'react'
import PropTypes from 'prop-types'
import cssPropType from 'css-prop-type'

const Padding = ({ children, all, top, bottom, left, right }) => (
  <div
    style={{
      paddingTop: top !== null ? top : all,
      paddingBottom: bottom !== null ? bottom : all,
      paddingLeft: left !== null ? left : all,
      paddingRight: right !== null ? right : all,
    }}
  >
    {children}
  </div>
)

Padding.propTypes = {
  children: PropTypes.node,
  all: cssPropType,
  top: cssPropType,
  bottom: cssPropType,
  left: cssPropType,
  right: cssPropType,
}

Padding.defaultProps = {
  children: [],
  all: 0,
  top: null,
  bottom: null,
  left: null,
  right: null,
}

export default Padding
