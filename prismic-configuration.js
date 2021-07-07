/**
 * This file is used for setting up and connecting to Prismic.
 */

module.exports = {
  // The domain name of your Prismic repository. This can be found in the URL of
  // your repository.
  //
  // Example: 'my-repo' if your Prismic repository URL is 'my-repo.prismic.io'.
  prismicRepo: 'multilanguage-examples',

  // The default language for content in your Prismic repository.
  defaultLanguage: 'en-us',

  // All available languages for content in your Prismic repository.
  langs: ['en-us', 'fr-fr'],
}
