const { defaultLanguage } = require('../../prismic-configuration')

/* The Link Resolver
* This function will be used to generate links to Prismic documents
As your project grows, you should update this function according to your routes */

const linkResolver = (doc) => {
  const properties = doc._meta || doc;

  if (properties.type === 'homepage') {
    return properties.lang === defaultLanguage ? '/' : `/${properties.lang}`
  }

  if (properties.type === 'page') {
    return properties.lang === defaultLanguage
      ? `/page/${properties.uid}`
      : `/page/${properties.lang}/${properties.uid}`
  }

  return '/'
};

module.exports = linkResolver
