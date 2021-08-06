import * as React from 'react'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'

export const FullWidthImage = ({ slice }) => {
  const imagePosition =
    slice.primary.background_image_position === 'Left' ? 'left-bg' : 'right-bg'

  return (
    <section className="full-width-image auto-grid">
      <div className="main-img">
        <GatsbyImage
          image={slice.primary.image?.gatsbyImageData}
          alt={slice.primary.image?.alt}
        />
      </div>
      <div className={`background ${imagePosition}`}>
        <StaticImage
          src="../images/full-width-image-background.png"
          alt="Background pattern"
          placeholder="none"
        />
      </div>
    </section>
  )
}

export const query = graphql`
  fragment PageDataBodyFullWidthImage on PrismicPageDataBodyFullWidthImage {
    primary {
      background_image_position
      image {
        gatsbyImageData
        alt
        copyright
      }
    }
  }
  fragment HomepageDataBodyFullWidthImage on PrismicHomepageDataBodyFullWidthImage {
    primary {
      background_image_position
      image {
        gatsbyImageData
        alt
        copyright
      }
    }
  }
`
