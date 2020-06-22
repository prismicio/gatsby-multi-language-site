import React from 'react'
import { RichText } from 'prismic-reactjs'
import GatsbyLink from '../GatsbyLink'

const EmailSignup = ({ slice }) => (
  <section className="email-signup">
    <div className="description">
      <RichText render={slice.primary.section_title.raw || []} />
      <RichText
        render={slice.primary.description.raw || []}
        serializeHyperlink={GatsbyLink}
      />
    </div>
    <div className="form">
      <RichText render={slice.primary.input_label.raw || []} />
      <input
        className="email-input"
        type="text"
        name="FirstName"
        placeholder={RichText.asText(slice.primary.input_placeholder.raw || [])}
      />
      <input
        className="btn"
        type="submit"
        value={RichText.asText(slice.primary.button_text.raw || [])}
      />
    </div>
  </section>
)

export default EmailSignup
