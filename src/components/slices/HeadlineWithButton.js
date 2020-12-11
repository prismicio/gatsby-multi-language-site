import React from 'react'
import { RichText } from 'prismic-reactjs'
import GatsbyLink from '../GatsbyLink'

const HeadlineWithButton = ({ slice }) => (
  <section className="headline-with-button">
    <div>
      <RichText render={slice.primary.headline.raw || []} />
      <RichText
        render={slice.primary.description.raw || []}
        serializeHyperlink={GatsbyLink}
      />
    </div>
    <div className="button">
      <img
        src={slice.primary.button ? slice.primary.button.url : ''}
        alt={slice.primary.button ? slice.primary.button.alt : ''}
      />
    </div>
  </section>
)

export default HeadlineWithButton
