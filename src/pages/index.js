import React from 'react'
import Link from 'gatsby-link'

import VerticalMargin from '../components/VerticalMargin'
import FontAwesome from '../components/FontAwesome'
import splash from './splash.jpg'
import metadata from '../../metadata'
import typography from '../utils/typography'
const { rhythm } = typography

const birthday = new Date(1016908200000)
function isToday(date, today) {
  if (today === undefined) {
    today = new Date()
  }
  let isToday = false
  const m = today.getMonth() - date.getMonth()
  if (m === 0) {
    const d = today.getDate() - date.getDate()
    if (d === 0) {
      isToday = true
    }
  }
  return isToday
}

class Header extends React.Component {
  render() {
    return (
      <h1>
        <Link to="/">
          Kabir Goel{' '}
          <span style={{ fontWeight: 'lighter' }}>
            &mdash; designer & developer. {isToday(birthday) ? '🎉' : ''}
          </span>
        </Link>
      </h1>
    )
  }
}

const Splash = () => <img style={{ margin: 0 }} src={splash} alt="" />

const About = () => (
  <p>
    Find me on GitHub, VSCO, Spotify and Medium, or<br />
    reach out via email. 🌝
  </p>
)

const socialMediaInfo = Object.keys(metadata.socialMedia).map(key => {
  let info = {
    _name: key,
    ...metadata.socialMedia[key],
  }
  return info
})

const Social = () => {
  const socialIcons = socialMediaInfo.map(info => {
    return (
      <a href={info.url}>
        <FontAwesome icon={info.icon ? info.icon : info._name} />
      </a>
    )
  })

  return (
    <ul
      style={{
        listStyleType: 'none',
        margin: 0,
        color: typography.options.headerColor,
      }}
    >
      {socialIcons.map((icon, index) => (
        <li
          key={index}
          style={{
            display: 'inline-block',
            marginRight: '10px',
          }}
        >
          {icon}
        </li>
      ))}
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
  <main>
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
  </main>
)

export default IndexPage
