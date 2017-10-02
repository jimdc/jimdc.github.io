import React from 'react'
import Link from 'gatsby-link'

import VerticalMargin from '../components/VerticalMargin'
import Container from '../components/Container'
import FontAwesome from '../components/FontAwesome'
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
  <h1>
    <Link to="/">
      Kabir Goel{' '}
      <span style={{ fontWeight: 'lighter' }}>
        &mdash; designer &amp; developer. {isToday(birthday) ? '🎉' : ''}
      </span>
    </Link>
  </h1>
)

const Splash = () => (
  <img
    style={{ margin: 0, width: '100%', height: 'auto' }}
    src={splash}
    alt=""
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
  const socialIcons = socialMediaInfo.map(info => (
    <li
      key={info.name}
      style={{
        display: 'inline-block',
        marginRight: '10px',
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

const Bar = () => (
  <div
    style={{
      width: 100,
      height: 1,
      backgroundColor: typography.options.bodyColor,
    }}
  />
)

const IndexPage = () => (
  <Container maxWidth={512}>
    <VerticalMargin top={rhythm(6)}>
      <Header />
    </VerticalMargin>
    <Splash />
    <VerticalMargin top={rhythm(1)}>
      <About />
    </VerticalMargin>
    <Social />
    <VerticalMargin top={rhythm(1.5)}>
      <Bar />
    </VerticalMargin>
  </Container>
)

export default IndexPage
