import * as React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'

import { GatsbyLink } from '../components/GatsbyLink'

export const EmailSignup = ({ slice }) => (
  <section className="email-signup">
    <div className="description">
      <RichText render={slice.primary.section_title.richText || []} />
      <RichText
        render={slice.primary.description.richText || []}
        serializeHyperlink={GatsbyLink}
      />
    </div>
    <div className="form">
      <RichText render={slice.primary.input_label.richText || []} />
      <input
        className="email-input"
        type="text"
        name="FirstName"
        placeholder={RichText.asText(slice.primary.input_placeholder.richText || [])}
      />
      <input
        className="btn"
        type="submit"
        value={RichText.asText(slice.primary.button_text.richText || [])}
      />
    </div>
  </section>
)

export const query = graphql`
  fragment PageDataBodyEmailSignup on PrismicPageDataBodyEmailSignup {
    primary {
      section_title {
        richText
      }
      input_placeholder {
        richText
      }
      input_label {
        richText
      }
      description {
        richText
      }
      button_text {
        richText
      }
    }
  }
  fragment HomepageDataBodyEmailSignup on PrismicHomepageDataBodyEmailSignup {
    primary {
      section_title {
        richText
      }
      input_placeholder {
        richText
      }
      input_label {
        richText
      }
      description {
        richText
      }
      button_text {
        richText
      }
    }
  }
`
