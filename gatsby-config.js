const gastbySourcePrismicConfig = {
  resolve: 'gatsby-source-prismic',
  options: {
    repositoryName: process.env.PRISMIC_REPO_NAME,
    accessToken: process.env.PRISMIC_API_KEY,
    linkResolver: require('./src/utils/linkResolver').linkResolver,
    schemas: {
      // Custom types mapped to schemas
      homepage: require('./custom_types/homepage.json'),
      page: require('./custom_types/page.json'),
      top_menu: require('./custom_types/top_menu.json'),
    },
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
