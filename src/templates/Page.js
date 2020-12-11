import React from 'react'
import { graphql } from 'gatsby'
import { withPreview } from 'gatsby-source-prismic'
import Layout from '../components/Layout'
import SliceZone from '../components/SliceZone'

export const PageTemplate = ({ data }) => {
  if (!data) return null

  const pageContent = data.prismicPage
  const page = pageContent.data || {}

  const { lang, type, url } = pageContent
  const alternateLanguages = pageContent.alternate_languages || []
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  }
  const topMenu = data.prismicTopMenu || {}

  return (
    <Layout
      topMenu={topMenu.data}
      activeDocMeta={activeDoc}
    >
      <SliceZone slices={page.body} />
    </Layout>
  )
}

export const query = graphql`
query pageQuery($uid: String, $lang: String) {
  prismicPage(uid: {eq: $uid}, lang: {eq: $lang}) {
    url
    uid
    type
    id
    lang
    alternate_languages {
      id
      type
      lang
      uid
      url
    }
    data {
      body {
        ... on PrismicPageBodyEmailSignup {
          id
          slice_label
          slice_type
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
        ... on PrismicPageBodyFullWidthImage {
          id
          slice_type
          slice_label
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
        ... on PrismicPageBodyHeadlineWithButton {
          id
          slice_type
          slice_label
          primary {
            headline {
              html
              raw
              text
            }
            description {
              html
              raw
              text
            }
            button {
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
        ... on PrismicPageBodyInfoWithImage {
          id
          slice_label
          slice_type
          primary {
            featured_image {
              alt
              url
              thumbnails {
                mobile {
                  alt
                  url
                }
                tablet {
                  alt
                  url
                }
              }
            }
            section_title {
              html
              raw
              text
            }
            text {
              html
              raw
              text
            }
          }
        }
        ... on PrismicPageBodyTextInfo {
          id
          slice_label
          slice_type
          primary {
            left_column_text {
              html
              raw
              text
            }
            right_column_text {
              html
              raw
              text
            }
            section_title {
              html
              raw
              text
            }
          }
        }
      }
    }
  }
  prismicTopMenu(lang: {eq: $lang}) {
   ...TopMenuFragment
  }
}

`

export default withPreview(PageTemplate)
