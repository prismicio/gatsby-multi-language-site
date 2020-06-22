/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'gatsby'
import linkResolver from '../utils/linkResolver'
/*
import { linkResolver } from 'gatsby-source-prismic-graphql'
*/
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
/*
const GatsbyLink = (type, element, content, children, index) => {
  console.log("GatsbyLink")
  console.log({ element, content })
  return (<Link to={ element.data.url || linkResolver(element.data)} key={element.data.id}>{content}</Link>)
}

*/
export default GatsbyLink
