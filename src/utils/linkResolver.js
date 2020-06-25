const { defaultLanguage } = require('../../prismic-configuration')

/* The Link Resolver
* This function will be used to generate links to Prismic documents
As your project grows, you should update this function according to your routes */

const linkResolver = (doc) => {
  if (doc.type === 'homepage') {
    return doc.lang === defaultLanguage ? '/' : `/${doc.lang}`
  }

  if (doc.type === 'page') {
    return doc.lang === defaultLanguage
      ? `/page/${doc.uid}`
      : `/page/${doc.lang}/${doc.uid}`
  }

  return '/'
}

module.exports = linkResolver
