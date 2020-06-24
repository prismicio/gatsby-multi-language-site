module.exports = {
  // The repo name for your Prismic repository (found in the url of your repo: https://your-repo-name.prismic.io/)
  prismicRepo: 'multi-language-example',

  // Preview path for handling redirects.
  previewPath: '/preview',

  // Release ID to build
  releaseID: 'XvIgmxIAACMAzSaL',

  // access token to access the release
  // accessToken: '',

  buildRelease: process && process.env && process.env.GATSBY_CLOUD && process.env.NODE_ENV === 'development',

  // Language configuration in your Prismic repository: Settings / Translations & locals
  defaultLanguage: 'en-us',
  langs: ['en-us', 'fr-fr'],
}
