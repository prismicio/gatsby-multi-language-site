import * as React from 'react'
import { graphql } from 'gatsby'
import { PrismicRichText } from '@prismicio/react'
import { asText } from '@prismicio/helpers'

export const EmailSignup = ({ slice }) => (
  <section className="email-signup">
    <div className="description">
      <PrismicRichText field={slice.primary.section_title.richText} />
      <PrismicRichText field={slice.primary.description.richText} />
    </div>
    <div className="form">
      <PrismicRichText field={slice.primary.input_label.richText} />
      <input
        className="email-input"
        type="text"
        name="FirstName"
        placeholder={asText(slice.primary.input_placeholder.richText)}
      />
      <input
        className="btn"
        type="submit"
        value={asText(slice.primary.button_text.richText)}
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
