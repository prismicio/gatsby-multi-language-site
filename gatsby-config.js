// const { prismicRepo, defaultLanguage, langs } = require('./prismic-config')
const { prismicRepo, previewPath, releaseID, buildRelease, accessToken } = require('./prismic-configuration')
const linkResolver = require('./src/utils/linkResolver')

process.env.PRISMIC_REPO_NAME = process.env.PRISMIC_REPO_NAME || prismicRepo

process.env.PRISMIC_PREVIEW_PATH = process.env.PRISMIC_PREVIEW_PATH || previewPath

process.env.PRISMIC_RELEASE_ID = process.env.PRISMIC_RELEASE_ID || releaseID

const apiKey = process.env.PRISMIC_API_KEY || accessToken

const homepageSchema = require('./custom_types/homepage.json')
const pageSchema = require('./custom_types/page.json')
const topMenuSchema = require('./custom_types/top_menu.json')

const gastbySourcePrismicConfig = {
  resolve: 'gatsby-source-prismic',
  options: {
    repositoryName: process.env.PRISMIC_REPO_NAME,
    accessToken: apiKey,
    linkResolver: ({ node, key, value }) => (doc) => linkResolver(doc),

    schemas: {
      // Custom types mapped to schemas
      homepage: homepageSchema,
      page: pageSchema,
      top_menu: topMenuSchema,
    },

    releaseID: buildRelease ? process.env.PRISMIC_RELEASE_ID : '',
    // add prismic toolbar
    prismicToolbar: true,
  },
}

module.exports = {
  siteMetadata: {
    title: 'Multi-language site',
    description: 'Sample multi-language website with Prismic CMS & Gatsby.js',
  },
  plugins: [
    gastbySourcePrismicConfig,
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
  ],
}
