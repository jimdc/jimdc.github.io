import PropTypes from 'prop-types'
import React from 'react'
import Waypoint from 'react-waypoint'
import _ from 'lodash'
import { rhythm } from '../utils/typography'

const imageType = {
  src: PropTypes.string,
  aspectRatio: PropTypes.number,
}

class Image extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imagePaddingBottom: 0,
      imageLoaded: false,
      beginImageLoad: false,
    }
    this.onImageLoad = this.onImageLoad.bind(this)
    this.calculatePadding = _.debounce(this.calculatePadding.bind(this), 100, {
      leading: true,
    })
  }

  componentDidMount() {
    this.calculatePadding()
    window.addEventListener('resize', this.calculatePadding)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.calculatePadding)
  }

  onImageLoad() {
    this.setState({
      imageLoaded: true,
    })
  }

  calculatePadding() {
    this.setState({
      imagePaddingBottom: this.imgDiv.clientWidth / this.props.data.aspectRatio,
    })
  }

  render() {
    return (
      <section>
        <Waypoint onEnter={() => this.setState({ beginImageLoad: true })} />
        {/* this img is for loading the image */}
        {this.state.beginImageLoad ? (
          <img
            src={this.props.data.src}
            alt=""
            style={{ display: 'none' }}
            onLoad={this.onImageLoad}
          />
        ) : null}
        {/* this div is for loading animation + sizing */}
        <div
          ref={div => {
            this.imgDiv = div
          }}
          style={{
            backgroundColor: '#ddd',
            paddingBottom: this.state.imagePaddingBottom,
            position: 'relative',
            borderRadius: 3,
            overflow: 'hidden',
            // boxShadow: '0 1px 38px 0 rgba(39, 44, 49, .1)',
            boxShadow: '0 3px 38px 0 rgba(25, 25, 50, 0.1)',
          }}
        >
          {/* this div is for the actual image */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              backgroundImage: this.state.imageLoaded
                ? `url(${this.props.data.src})`
                : 'none',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              opacity: this.state.imageLoaded ? '1' : '0',
              transition: 'opacity .4s',
            }}
          />
        </div>
      </section>
    )
  }
}
Image.propTypes = { data: PropTypes.shape(imageType).isRequired }

export default {
  Image,
  imageType,
}
