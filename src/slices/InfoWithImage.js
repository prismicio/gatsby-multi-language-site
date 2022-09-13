import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { PrismicRichText } from '@prismicio/react'

export const InfoWithImage = ({ slice }) => {
  const featuredImage = slice.primary.featured_image
  return (
    <section className="info-with-image">
      <div className="featured-image">
        <GatsbyImage
          image={featuredImage?.thumbnails?.mobile?.gatsbyImageData}
          alt={featuredImage?.alt}
          className="mobile-thumbnail"
        />
        <GatsbyImage
          image={featuredImage?.thumbnails?.tablet?.gatsbyImageData}
          alt={featuredImage?.alt}
          className="tablet-thumbnail"
        />
        <GatsbyImage
          image={featuredImage?.gatsbyImageData}
          alt={featuredImage?.alt}
          className="desktop"
        />
      </div>
      <div className="text-content">
        <StaticImage
          src="../images/top-icon.png"
          alt="Checkbox icon"
          placeholder="none"
        />
        <PrismicRichText field={slice.primary.section_title.richText} />
        <PrismicRichText field={slice.primary.text.richText} />
      </div>
    </section>
  )
}

export const query = graphql`
  fragment PageDataBodyInfoWithImage on PrismicPageDataBodyInfoWithImage {
    primary {
      featured_image {
        url
        gatsbyImageData
        alt
        thumbnails {
          mobile {
            url
            gatsbyImageData
            alt
          }
          tablet {
            url
            gatsbyImageData
            alt
          }
        }
      }
      section_title {
        richText
      }
      text {
        richText
      }
    }
  }
  fragment HomepageDataBodyInfoWithImage on PrismicHomepageDataBodyInfoWithImage {
    primary {
      featured_image {
        gatsbyImageData
        alt
        thumbnails {
          mobile {
            gatsbyImageData
            alt
          }
          tablet {
            gatsbyImageData
            alt
          }
        }
      }
      section_title {
        richText
      }
      text {
        richText
      }
    }
  }
`
