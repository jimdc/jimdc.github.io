import React from 'react'
import Link from 'gatsby-link'

import { rhythm } from '../utils/typography'
import VerticalMargin from '../components/VerticalMargin'

const NotFoundPage = () => (
  <div>
    <VerticalMargin top={rhythm(6)}>
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          404 <span style={{ fontWeight: 'lighter' }}>&mdash; Not Found.</span>
        </Link>
      </h1>
    </VerticalMargin>
  </div>
)

export default NotFoundPage
