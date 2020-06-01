import React from 'react'
import { RichText } from 'prismic-reactjs'
import GatsbyLink from '../GatsbyLink'
import topIcon from '../../images/top-icon.png'

const InfoWithImage = ({ slice }) => {
  const featuredImage = slice.primary.featured_image
  return (
    <section className="info-with-image">
      <div className="featured-image">
        <picture>
          <source
            srcSet={featuredImage ? featuredImage.mobile.url : ''}
            alt={featuredImage ? featuredImage.mobile.alt : ''}
            media="(max-width: 500px)"
          />
          <source
            srcSet={featuredImage ? featuredImage.tablet.url : ''}
            alt={featuredImage ? featuredImage.tablet.alt : ''}
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
        <RichText render={slice.primary.section_title || []} />
        <RichText
          render={slice.primary.text || []}
          serializeHyperlink={GatsbyLink}
        />
      </div>
    </section>
  )
}

export default InfoWithImage
