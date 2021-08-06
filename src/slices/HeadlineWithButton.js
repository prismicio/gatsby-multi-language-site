import * as React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { GatsbyImage } from 'gatsby-plugin-image'

import { GatsbyLink } from '../components/GatsbyLink'

export const HeadlineWithButton = ({ slice }) => (
  <section className="headline-with-button">
    <div>
      <RichText render={slice.primary.headline.raw || []} />
      <RichText
        render={slice.primary.description.raw || []}
        serializeHyperlink={GatsbyLink}
      />
    </div>
    <div className="button">
      <GatsbyImage
        image={slice.primary.button?.gatsbyImageData}
        alt={slice.primary.button?.alt}
      />
    </div>
  </section>
)

export const query = graphql`
  fragment PageDataBodyHeadlineWithButton on PrismicPageDataBodyHeadlineWithButton {
    primary {
      headline {
        html
        raw
        text
      }
      description {
        html
        raw
        text
      }
      button {
        gatsbyImageData
        alt
        copyright
        dimensions {
          height
          width
        }
      }
    }
  }
  fragment HomepageDataBodyHeadlineWithButton on PrismicHomepageDataBodyHeadlineWithButton {
    primary {
      headline {
        html
        raw
        text
      }
      description {
        html
        raw
        text
      }
      button {
        gatsbyImageData
        alt
        copyright
        dimensions {
          height
          width
        }
      }
    }
  }
`
