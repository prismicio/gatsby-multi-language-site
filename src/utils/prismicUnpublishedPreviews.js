/**
 * This file contains configuration for `gatsby-plugin-prismic-previews` to
 * support preview sessions from Prismic with unpublished documents.
 *
 * @see https://github.com/angeloashmore/gatsby-source-prismic/tree/alpha/packages/gatsby-plugin-prismic-previews
 */

import { componentResolverFromMap } from 'gatsby-plugin-prismic-previews'

import { prismicRepo } from '../../prismic-configuration'
import { linkResolver } from './linkResolver'

import PageTemplate from '../templates/Page'
import HomepageTemplate from '../templates/Homepage'

/**
 * Prismic preview configuration for each repository in your app. This set of
 * configuration objects will be used with the `withPrismicUnpublishedPreview`
 * higher order component.
 *
 * If your app needs to support multiple Prismic repositories, add each of
 * their own configuration objects here as additional elements.
 *
 * @see https://github.com/angeloashmore/gatsby-source-prismic/tree/alpha/packages/gatsby-plugin-prismic-previews#404-not-found-page
 */
export const unpublishedRepositoryConfigs = [
  {
    repositoryName: prismicRepo,
    linkResolver,
    componentResolver: componentResolverFromMap({
      page: PageTemplate,
      homepage: HomepageTemplate,
    }),
  },
]
