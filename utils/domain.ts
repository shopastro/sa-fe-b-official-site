export const getCmsDomain = () => {
  if (process.env.APP_ENV === 'dev') {
    return 'https://cms.beta.ishopastro.com'
  }
  return 'https://cms.shopastro-inc.com'
}

export const getBelugaDomain = () => {
  if (process.env.APP_ENV === 'dev') {
    return 'https://site-api.beta.ishopastro.com'
  }
  return 'https://site-api.beta.ishopastro.com'
}

export const getMediaDomain = () => {
  if (process.env.APP_ENV === 'dev') {
    return 'https://media.cdn.beta.ishopastro.com/'
  }
  return 'https://media.cdn.beta.ishopastro.com/'
}
