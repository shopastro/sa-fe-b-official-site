export const getCmsDomain = () => {
  if (window.location.host.includes('beta')) {
    return 'https://cms.beta.ishopastro.com'
  }
  return 'https://cms.shopastro-inc.com'
}

export const getBelugaDomain = () => {
  if (window.location.host.includes('beta')) {
    return 'https://site-api.cdn.beta.ishopastro.com'
  }
  return 'https://site-api.cdn.ishopastro.com'
}

export const getMediaDomain = () => {
  if (window.location.host.includes('beta')) {
    return 'https://media.cdn.beta.ishopastro.com/'
  }
  return 'https://media.cdn.ishopastro.com/'
}
