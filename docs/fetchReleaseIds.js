const https = require('https')
const { prismicRepo, accessToken } = require('../prismic-configuration')

const apiEndpoint = `https:/${prismicRepo}.prismic.io/api?access_token=${accessToken}`

const getReleasesFromResponse = (str) => {
  const json = JSON.parse(str)
  const refs = [].concat(json.refs)
  const releases = refs.filter((ref) => ref.isMasterRef !== true)
  return releases
}

https.get(apiEndpoint, (res) => {
  const { statusCode, statusMessage } = res

  if (statusCode < 200 || statusCode >= 300) {
    console.error({ statusCode, statusMessage })
  } else {
    let data = ''

    res.on('data', (d) => {
      data += d
    })

    res.on('end', () => {
      const releases = getReleasesFromResponse(data)
      if (releases.length === 0) {
        return console.log('No releases found')
      }
      return console.log(releases)
    })
  }

}).on('error', console.error)