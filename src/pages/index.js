import React from 'react'
import Link from 'gatsby-link'

import VerticalMargin from '../components/VerticalMargin'
import Padding from '../components/Padding'
import Container from '../components/Container'
import FontAwesome from '../components/FontAwesome'
import { Image } from '../components/Image'
import splash from './splash.jpg'
import metadata from '../../metadata'
import typography from '../utils/typography'

const { rhythm } = typography

const birthday = new Date(1016908200000)
function isToday(date, _today) {
  let today = _today
  if (today === undefined) {
    today = new Date()
  }
  let res = false
  const m = today.getMonth() - date.getMonth()
  if (m === 0) {
    const d = today.getDate() - date.getDate()
    if (d === 0) {
      res = true
    }
  }
  return res
}

const Header = () => (
  <h1 style={{ marginBottom: 0 }}>
    <Link to="/">
      Kabir Goel{' '}
      <span style={{ fontWeight: 'lighter' }}>
        &mdash; designer &amp; developer. {isToday(birthday) ? '🎉' : ''}
      </span>
    </Link>
  </h1>
)

const Splash = () => (
  <Image
    data={{
      src: splash,
      aspectRatio: 1.332231405,
    }}
  />
)

const About = () => (
  <p>
    Find me on VSCO or Medium, or take a look at<br />
    <Link to="/showcase" className="link--styled">
      the design &amp; photography showcase
    </Link>. 🌝
  </p>
)

const socialMediaInfo = Object.keys(metadata.socialMedia).map(key => {
  const info = {
    name: key,
    ...metadata.socialMedia[key],
  }
  return info
})

const Social = () => {
  const socialIcons = socialMediaInfo.map((info, index) => (
    <li
      key={info.name}
      style={{
        display: 'inline-block',
        marginRight: index !== socialMediaInfo.length - 1 ? '15px' : '0',
      }}
    >
      <a href={info.url}>
        <FontAwesome icon={info.icon ? info.icon : info.name} />
      </a>
    </li>
  ))

  return (
    <ul
      style={{
        listStyleType: 'none',
        margin: 0,
        color: typography.options.headerColor,
      }}
    >
      {socialIcons}
    </ul>
  )
}

const IndexPage = () => (
  <Container maxWidth={512}>
    <VerticalMargin top={rhythm(6)}>
      <Splash />
    </VerticalMargin>
    <Padding all={10} left="1vw" right="1vw">
      <VerticalMargin top={rhythm(1)}>
        <Header />
      </VerticalMargin>
      <VerticalMargin top={rhythm(0.5)}>
        <About />
      </VerticalMargin>
      <Social />
    </Padding>
  </Container>
)

export default IndexPage
