/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'gatsby'
import { linkResolver } from 'gatsby-source-prismic-graphql'

const GatsbyLink = (type, element, content, children, index) => {
  if (element.data.link_type === 'Document') {
    return (
      <Link to={linkResolver(element.data)} key={element.data.id}>
        {content}
      </Link>
    )
  }
  return null
}

export default GatsbyLink
