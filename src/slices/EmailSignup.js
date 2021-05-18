import * as React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'

import { GatsbyLink } from '../GatsbyLink'

export const EmailSignup = ({ slice }) => (
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

export const query = graphql`
  fragment PageDataBodyEmailSignup on PrismicPageDataBodyEmailSignup {
    primary {
      section_title {
        html
        raw
        text
      }
      input_placeholder {
        html
        raw
        text
      }
      input_label {
        html
        raw
        text
      }
      description {
        html
        raw
        text
      }
      button_text {
        html
        raw
        text
      }
    }
  }
  fragment HomepageDataBodyEmailSignup on PrismicHomepageDataBodyEmailSignup {
    primary {
      section_title {
        html
        raw
        text
      }
      input_placeholder {
        html
        raw
        text
      }
      input_label {
        html
        raw
        text
      }
      description {
        html
        raw
        text
      }
      button_text {
        html
        raw
        text
      }
    }
  }
`
