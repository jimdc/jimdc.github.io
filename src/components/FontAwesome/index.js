import React from 'react'
import PropTypes from 'prop-types'

import './font-awesome/css/font-awesome.min.css'

const FontAwesome = ({ icon }) => <i className={`fa fa-${icon}`} />
FontAwesome.propTypes = {
  icon: PropTypes.string.isRequired,
}

export default FontAwesome
