import * as React from 'react'
import { graphql } from 'gatsby'

import backgroundImage from '../images/full-width-image-background.png'

export const FullWidthImage = ({ slice }) => {
  const imagePosition =
    slice.primary.background_image_position === 'Left' ? 'left-bg' : 'right-bg'

  return (
    <section className="full-width-image auto-grid">
      <div className="main-img">
        <img
          src={slice.primary.image ? slice.primary.image.url : ''}
          alt={slice.primary.image ? slice.primary.image.alt : ''}
        />
      </div>
      <div className={`background ${imagePosition}`}>
        <img src={backgroundImage} alt="Background pattern" />
      </div>
    </section>
  )
}

export const query = graphql`
  fragment PageDataBodyFullWidthImage on PrismicPageDataBodyFullWidthImage {
    primary {
      background_image_position
      image {
        alt
        copyright
        url
        dimensions {
          height
          width
        }
      }
    }
  }
  fragment HomepageDataBodyFullWidthImage on PrismicHomepageDataBodyFullWidthImage {
    primary {
      background_image_position
      image {
        alt
        copyright
        url
        dimensions {
          height
          width
        }
      }
    }
  }
`
