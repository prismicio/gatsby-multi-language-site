import * as React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'

import { GatsbyLink } from '../components/GatsbyLink'

import topIcon from '../images/top-icon.png'

export const InfoWithImage = ({ slice }) => {
  const featuredImage = slice.primary.featured_image
  return (
    <section className="info-with-image">
      <div className="featured-image">
        <picture>
          <source
            srcSet={featuredImage ? featuredImage.thumbnails.mobile.url : ''}
            alt={featuredImage ? featuredImage.thumbnails.mobile.alt : ''}
            media="(max-width: 500px)"
          />
          <source
            srcSet={featuredImage ? featuredImage.thumbnails.tablet.url : ''}
            alt={featuredImage ? featuredImage.thumbnails.tablet.alt : ''}
            media="(max-width: 1100px)"
          />
          <img
            src={featuredImage ? featuredImage.url : ''}
            alt={featuredImage ? featuredImage.alt : ''}
          />
        </picture>
      </div>
      <div className="text-content">
        <img src={topIcon} alt="Checkbox icon" />
        <RichText render={slice.primary.section_title.raw || []} />
        <RichText
          render={slice.primary.text.raw || []}
          serializeHyperlink={GatsbyLink}
        />
      </div>
    </section>
  )
}

export const query = graphql`
  fragment PageDataBodyInfoWithImage on PrismicPageDataBodyInfoWithImage {
    primary {
      featured_image {
        alt
        url
        thumbnails {
          mobile {
            alt
            url
          }
          tablet {
            alt
            url
          }
        }
      }
      section_title {
        html
        raw
        text
      }
      text {
        html
        raw
        text
      }
    }
  }
  fragment HomepageDataBodyInfoWithImage on PrismicHomepageDataBodyInfoWithImage {
    primary {
      featured_image {
        alt
        url
        thumbnails {
          mobile {
            alt
            url
          }
          tablet {
            alt
            url
          }
        }
      }
      section_title {
        html
        raw
        text
      }
      text {
        html
        raw
        text
      }
    }
  }
`
