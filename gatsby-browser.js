import { registerLinkResolver } from 'gatsby-source-prismic-graphql'
import linkResolver from './src/utils/linkResolver'

registerLinkResolver(linkResolver)
