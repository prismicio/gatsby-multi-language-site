import React from 'react'
import { RichText } from 'prismic-reactjs'
import GatsbyLink from '../GatsbyLink'

const TextInfo = ({ slice }) => (
  <section className="text-info">
    <div className="left-column">
      <img
        src={slice.primary.top_icon ? slice.primary.top_icon.url : ''}
        alt={slice.primary.top_icon ? slice.primary.top_icon.alt : ''}
      />
      <RichText render={slice.primary.section_title || []} />
      <RichText
        render={slice.primary.left_column_text || []}
        serializeHyperlink={GatsbyLink}
      />
    </div>
    <div className="right-column">
      <RichText
        render={slice.primary.right_column_text || []}
        serializeHyperlink={GatsbyLink}
      />
    </div>
  </section>
)

export default TextInfo
