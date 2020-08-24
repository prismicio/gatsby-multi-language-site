import { registerLinkResolver } from '@prismicio/gatsby-source-prismic-graphql'
import linkResolver from './src/utils/linkResolver'

registerLinkResolver(linkResolver)
