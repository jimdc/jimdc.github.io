import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Waypoint from 'react-waypoint'

import VerticalMargin from '../../components/VerticalMargin'
import Container from '../../components/Container'
import typography from '../../utils/typography'

const { rhythm } = typography

const Header = () => (
  <h1 style={{ margin: 0 }}>
    <Link to="/">
      Kabir Goel{' '}
      <span style={{ fontWeight: 'lighter' }}>
        &mdash; design &amp; photography showcase.
      </span>
    </Link>
  </h1>
)

const About = () => (
  <div>
    <p style={{ margin: 0 }}>
      A gallery of my best shots. {' '}
      <span style={{ color: '#555' }}>© {new Date().getFullYear()}</span>
    </p>
  </div>
)

const imageType = {
  base64: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  srcSet: PropTypes.string,
  originalName: PropTypes.string,
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
      <div>
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
        {/* this div is for defined edges with blur */}
        <div
          style={{
            transform: 'translate3d(0, 0, 0)',
            overflow: 'hidden',
            marginBottom: rhythm(1),
          }}
        >
          {/* this div is for loading / sizing */}
          <div
            ref={div => {
              this.imgDiv = div
            }}
            style={{
              backgroundImage: `url(${this.props.data.base64})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              paddingBottom: this.state.imagePaddingBottom,
              position: 'relative',
              filter: this.state.imageLoaded ? 'none' : 'blur(20px)',
              transition: 'filter .4s',
              transform: 'translate3d(0, 0, 0)',
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
        </div>
      </div>
    )
  }
}
Image.propTypes = { data: PropTypes.shape(imageType).isRequired }

const Images = ({ data }) => (
  <div>
    {data.map(image => (
      <VerticalMargin key={image.originalImg} bottom={rhythm(3)}>
        <Image data={image} />
      </VerticalMargin>
    ))}
  </div>
)
Images.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(imageType)).isRequired,
}

const IndexPage = ({ data }) => {
  const images = data.allImageSharp.edges.map(e => e.node.image)
  return (
    <Container>
      <Container maxWidth={512}>
        <VerticalMargin top={rhythm(6)}>
          <Header />
        </VerticalMargin>
        <VerticalMargin top={rhythm(0.5)}>
          <About />
        </VerticalMargin>
      </Container>
      <VerticalMargin top={rhythm(1.5)}>
        <Images data={images} />
      </VerticalMargin>
      <p>That&#8217;s all for now.</p>
    </Container>
  )
}
IndexPage.propTypes = {
  data: PropTypes.shape({
    allImageSharp: PropTypes.shape({ edges: PropTypes.array }),
  }).isRequired,
}

export default IndexPage

export const indexQuery = graphql`
  query IndexQuery {
    allImageSharp {
      edges {
        node {
          ... on ImageSharp {
            image: responsiveSizes(quality: 100, toFormat: JPG) {
              base64
              src
              aspectRatio
              originalImg
            }
          }
        }
      }
    }
  }
`
