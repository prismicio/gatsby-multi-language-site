import React from 'react'
import { graphql } from 'gatsby'
import { withPreview } from 'gatsby-source-prismic'
import Layout from '../components/Layout'
import SliceZone from '../components/SliceZone'

export const HomepageTemplate = ({ data }) => {
  if (!data) return null

  const homepage = data.prismicHomepage || {}
  const topMenu = data.prismicTopMenu || {}

  const { lang, type, url } = homepage || {}
  const alternateLanguages = homepage.alternate_languages || []
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  }

  return (
    <Layout
      topMenu={topMenu.data}
      activeDocMeta={activeDoc}
    >
      <SliceZone slices={homepage.data.body} />
    </Layout>
  )
}

export const query = graphql`
query homepageQuery($lang: String) {
  prismicHomepage(lang: {eq: $lang}) {
    alternate_languages {
      uid
      type
      lang
      url
    }
    lang
    url
    type
    data {
      body {
        ... on PrismicHomepageBodyEmailSignup {
          id
          slice_type
          slice_label
          primary {
            section_title {
              text
              html
              raw
            }
            description {
              text
              raw
              html
            }
            input_label {
              text
              html
              raw
            }
            input_placeholder {
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
        ... on PrismicHomepageBodyFullWidthImage {
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
              fluid {
                src
              }
              fixed {
                src
              }
            }
          }
        }
        ... on PrismicHomepageBodyHeadlineWithButton {
          id
          slice_label
          slice_type
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
              url
              fixed {
                src
              }
              fluid {
                src
              }
            }
          }
        }
        ... on PrismicHomepageBodyInfoWithImage {
          id
          slice_type
          slice_label
          primary {
            featured_image {
              url
              fluid {
                src
              }
              alt
              copyright
            }
            section_title {
              text
              html
              raw
            }
            text {
              html
              raw
              text
            }
          }
        }
        ... on PrismicHomepageBodyTextInfo {
          id
          slice_label
          slice_type
          primary {
            section_title {
              raw
              html
              text
            }
            right_column_text {
              html
              text
              raw
            }
            left_column_text {
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
    type
    lang
    data {
      menu_links {
        label {
          html
          raw
          text
        }
        link {
          document {
            ... on PrismicHomepage {
              id
              url
              type
              lang
              alternate_languages {
                uid
                url
                type
                lang
              }
              data {
                display_title {
                  html
                  raw
                  text
                }
              }
            }
            ... on PrismicPage {
              id
              url
              uid
              lang
              alternate_languages {
                uid
                url
                type
                lang
              }
              data {
                display_title {
                  html
                  raw
                  text
                }
              }
            }
          }
        }
      }
    }
  }
}
`

export default withPreview(HomepageTemplate)
