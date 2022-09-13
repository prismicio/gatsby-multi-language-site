const path = require('path')
const dotenv = require('dotenv')

dotenv.config()

const prismicConfig = require('./prismic-configuration')

module.exports = {
  siteMetadata: {
    title: 'Multi-language site',
    description: 'Sample multi-language website with Prismic CMS & Gatsby.js',
  },
  plugins: [
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: prismicConfig.prismicRepo,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        linkResolver: require('./src/utils/linkResolver').linkResolver,
        schemas: {
          homepage: require('./custom_types/homepage.json'),
          page: require('./custom_types/page.json'),
          top_menu: require('./custom_types/top_menu.json'),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-prismic-previews',
      options: {
        repositoryName: prismicConfig.prismicRepo,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: path.resolve(__dirname, 'src', 'images', 'favicon.png'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.resolve(__dirname, 'src', 'images'),
      },
    },
  ],
}
