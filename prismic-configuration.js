
module.exports = {
  // The repo name for your Prismic repository (found in the url of your repo: https://your-repo-name.prismic.io/)
  prismicRepo: 'https://gatsby-multi-language-example.wroom.io',

  // For prismic theme command <https://user-guides.prismic.io/en/articles/764581-how-to-create-a-theme-to-quickstart-your-projects-for-prismic>

  apiEndpoint: 'https://multi-language-example.prismic.io/api',

  // Preview path for handling redirects.
  previewPath: '/preview',

  // Release ID to build (requires access)
  // releaseID: 'X1jznxEAABsAxWPY',

  // access token to access the release
  accessToken: "",

  // Language configuration in your Prismic repository: Settings / Translations & locals
  defaultLanguage: 'en-gb',
  langs: ['en-gb', 'fr-fr'],
}
