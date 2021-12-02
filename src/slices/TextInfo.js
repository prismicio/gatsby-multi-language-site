import * as React from 'react'
import { graphql } from 'gatsby'
import { PrismicRichText } from '@prismicio/react'
import { StaticImage } from 'gatsby-plugin-image'

export const TextInfo = ({ slice }) => (
  <section className="text-info">
    <div className="left-column">
      <StaticImage src="../images/top-icon.png" alt="Checkbox icon" />
      <PrismicRichText field={slice.primary.section_title.richText} />
      <PrismicRichText field={slice.primary.left_column_text.richText} />
    </div>
    <div className="right-column">
      <PrismicRichText field={slice.primary.right_column_text.richText} />
    </div>
  </section>
)

export const query = graphql`
  fragment PageDataBodyTextInfo on PrismicPageDataBodyTextInfo {
    primary {
      left_column_text {
        richText
      }
      right_column_text {
        richText
      }
      section_title {
        richText
      }
    }
  }
  fragment HomepageDataBodyTextInfo on PrismicHomepageDataBodyTextInfo {
    primary {
      left_column_text {
        richText
      }
      right_column_text {
        richText
      }
      section_title {
        richText
      }
    }
  }
`
