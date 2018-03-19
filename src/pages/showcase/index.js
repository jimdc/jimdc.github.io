import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import _ from 'lodash'

import VerticalMargin from '../../components/VerticalMargin'
import Container from '../../components/Container'
import { Image, imageType } from '../../components/Image'
import typography from '../../utils/typography'

const { rhythm } = typography

const Title = () => (
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
      A gallery of my best shots.{' '}
      <span style={{ color: '#555' }}>© {new Date().getFullYear()}</span>
    </p>
  </div>
)

const Header = () => (
  <header>
    <Title />
    <VerticalMargin top={rhythm(0.5)}>
      <About />
    </VerticalMargin>
  </header>
)

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
    <VerticalMargin top={rhythm(6)} bottom={rhythm(6)}>
      <Container>
        <Container maxWidth={512}>
          <Header />
        </Container>
        <VerticalMargin top={rhythm(1.5)}>
          <Images data={images} />
        </VerticalMargin>
        <footer
          style={{
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: 1,
            color: 'grey',
          }}
        >
          Fin.
        </footer>
      </Container>
    </VerticalMargin>
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
            image: responsiveSizes(quality: 100) {
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
