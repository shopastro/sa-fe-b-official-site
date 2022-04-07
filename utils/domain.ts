export const getCmsDomain = () => {
  if (process.env.APP_ENV === 'dev') {
    return 'https://cms.beta.ishopastro.com'
  }
  return 'https://cms.prod.ishopastro.com'
}
