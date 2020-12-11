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

export default InfoWithImage
