import React from 'react'
import { withUnpublishedPreview } from 'gatsby-source-prismic'
import { PageTemplate } from '../templates/Page'
import { HomepageTemplate } from '../templates/Homepage'

const Page404 = () => (
  <div className="not-found">
    <h1>404</h1>
    <h3>The page you are looking for was not found</h3>
    <p>
      <a href="/">
        <button type="button">Return to homepage</button>
      </a>
    </p>
  </div>
)

export default (props) => {
  console.log("404")
  console.log({ props })
  return withUnpublishedPreview(Page404, {
    templateMap: {
      page: PageTemplate,
      homepage: HomepageTemplate,
      prismicPage: PageTemplate,
      prismicHomepage: HomepageTemplate,
    },
  })(props)
}