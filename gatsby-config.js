const { prismicRepo, defaultLanguage, langs } = require('./prismic-config')

module.exports = {
  siteMetadata: {
    title: 'Multi-language site',
    description: 'Sample multi-language website with Prismic CMS & Gatsby.js',
  },
  plugins: [
    {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: prismicRepo,
        defaultLang: defaultLanguage,
        path: '/preview',
        previews: true,
        langs,
        pages: [
          {
            type: 'Homepage',
            match: '/:lang?',
            path: '/:lang?',
            component: require.resolve('./src/templates/Homepage.js'),
            langs,
          },
          {
            type: 'Page',
            match:
              '/page/:lang?/:uid',
            path: '/page/:lang?',
            component: require.resolve('./src/templates/Page.js'),
            langs,
          },
        ],
      },
    },
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
