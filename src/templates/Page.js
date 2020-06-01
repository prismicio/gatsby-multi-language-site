import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SliceZone from '../components/SliceZone'

const Page = ({ data }) => {
  const pageContent = data.prismic.allPages.edges[0]
  if (!pageContent) return null
  const page = pageContent.node

  const topMenuContent = data.prismic.allTop_menus.edges[0]
  if (!topMenuContent) return null
  const topMenu = topMenuContent.node

  if (page) {
    return (
      <Layout
        topMenu={topMenu}
        activeDocMeta={page._meta}
      >
        <SliceZone slices={page.body} />
      </Layout>
    )
  }
  return null
}

export const query = graphql`
query pageQuery($uid: String, $lang: String) {
  prismic {
    allPages(uid: $uid, lang: $lang) {
      edges {
        node {
          _meta {
            id
            uid
            type
            lang
            alternateLanguages {
              id
              lang
              type
              uid
            }
          }
          body {
            ... on PRISMIC_PageBodyEmail_signup {
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
            ... on PRISMIC_PageBodyFull_width_image {
              type
              label
              primary {
                background_image_position
                image
              }
            }
            ... on PRISMIC_PageBodyHeadline_with_button {
              type
              label
              primary {
                headline
                description
                button
              }
            }
            ... on PRISMIC_PageBodyInfo_with_image {
              type
              label
              primary {
                featured_image
                section_title
                text
              }
            }
            ... on PRISMIC_PageBodyText_info {
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

export default Page
