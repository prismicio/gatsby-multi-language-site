import React from 'react'
import { RichText } from 'prismic-reactjs'
import GatsbyLink from '../GatsbyLink'
import topIcon from '../../images/top-icon.png'

const TextInfo = ({ slice }) => (
  <section className="text-info">
    <div className="left-column">
      <img src={topIcon} alt="Checkbox icon" />
      <RichText render={slice.primary.section_title.raw || []} />
      <RichText
        render={slice.primary.left_column_text.raw || []}
        serializeHyperlink={GatsbyLink}
      />
    </div>
    <div className="right-column">
      <RichText
        render={slice.primary.right_column_text.raw || []}
        serializeHyperlink={GatsbyLink}
      />
    </div>
  </section>
)

export default TextInfo
