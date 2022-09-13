import * as React from 'react'
import { graphql } from 'gatsby'
import { PrismicRichText } from '@prismicio/react'
import { GatsbyImage } from 'gatsby-plugin-image'

export const HeadlineWithButton = ({ slice }) => (
  <section className="headline-with-button">
    <div>
      <PrismicRichText field={slice.primary.headline.richText} />
      <PrismicRichText field={slice.primary.description.richText} />
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
        richText
      }
      description {
        richText
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
        richText
      }
      description {
        richText
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
