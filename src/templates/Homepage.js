import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SliceZone from '../components/SliceZone'

const Homepage = ({ data }) => {
  if (!data) return null

  const homepageContent = data.prismic.allHomepages.edges[0]
  if (!homepageContent) return null
  const homepage = homepageContent.node

  const topMenuContent = data.prismic.allTop_menus.edges[0]
  if (!topMenuContent) return null
  const topMenu = topMenuContent.node

  return (
    <Layout
      topMenu={topMenu}
      activeDocMeta={homepage._meta}
    >
      <SliceZone slices={homepage.body} />
    </Layout>
  )
}

export const query = graphql`
query homepageQuery($lang: String) {
  prismic {
    allHomepages(lang: $lang) {
      edges {
        node {
          _meta {
            uid
            type
            lang
            alternateLanguages {
              lang
              type
              uid
            }
          }
          body {
            ... on PRISMIC_HomepageBodyEmail_signup {
              type
              label
              primary {
                section_title
                description
                input_label
                input_placeholder
                button_text
              }
            }
            ... on PRISMIC_HomepageBodyFull_width_image {
              type
              label
              primary {
                background_image_position
                image
              }
            }
            ... on PRISMIC_HomepageBodyHeadline_with_button {
              type
              label
              primary {
                headline
                description
                button
              }
            }
            ... on PRISMIC_HomepageBodyInfo_with_image {
              type
              label
              primary {
                featured_image
                section_title
                text
              }
            }
            ... on PRISMIC_HomepageBodyText_info {
              type
              label
              primary {
                section_title
                left_column_text
                right_column_text
              }
            }
          }
        }
      }
    }
    allTop_menus(lang: $lang) {
      edges {
        node {
          menu_links {
            label
            link {
              ... on PRISMIC_Page {
                _meta {
                  uid
                  lang
                  type
                  alternateLanguages {
                    uid
                    lang
                    type
                  }
                }
              }
              ... on PRISMIC_Homepage {
                _meta {
                  uid
                  lang
                  type
                  alternateLanguages {
                    uid
                    lang
                    type
                  }
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

export default Homepage
