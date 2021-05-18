import * as React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'

import { GatsbyLink } from '../components/GatsbyLink'

import topIcon from '../images/top-icon.png'

export const TextInfo = ({ slice }) => (
  <section className="text-info">
    <div className="left-column">
      <img src={topIcon} alt="Checkbox icon" />
      <RichText render={slice.primary.section_title.raw || []} />
      <RichText
        render={slice.primary.left_column_text.raw || []}
        serializeHyperlink={GatsbyLink}
      />
    </div>
    <div className="right-column">
      <RichText
        render={slice.primary.right_column_text.raw || []}
        serializeHyperlink={GatsbyLink}
      />
    </div>
  </section>
)

export const query = graphql`
  fragment PageDataBodyTextInfo on PrismicPageDataBodyTextInfo {
    primary {
      left_column_text {
        html
        raw
        text
      }
      right_column_text {
        html
        raw
        text
      }
      section_title {
        html
        raw
        text
      }
    }
  }
  fragment HomepageDataBodyTextInfo on PrismicHomepageDataBodyTextInfo {
    primary {
      left_column_text {
        html
        raw
        text
      }
      right_column_text {
        html
        raw
        text
      }
      section_title {
        html
        raw
        text
      }
    }
  }
`
