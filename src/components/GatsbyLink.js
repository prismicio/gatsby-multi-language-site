/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'gatsby'
import { Link as PrismicLink } from 'prismic-reactjs'
import { linkResolver } from 'gatsby-source-prismic-graphql'

const GatsbyLink = (type, element, content, children, index) => {
  if (element.data.link_type === 'Document') {
    return (
      <Link to={PrismicLink.url(element.data, linkResolver)} key={element.data.id}>
        {content}
      </Link>
    )
  }
  return null
}

export default GatsbyLink
