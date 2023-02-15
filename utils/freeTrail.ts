export const freeLink = (type: string, origin: string): string => {
  let link = `https://sys.admin.ishopastro.com/admin/user/signup?product=${type}&origin=https://www.shopastro.com${origin}`

  if (/beta/.test(location.host) || /localhost/.test(location.host)) {
    link = `https://sys.admin.beta.ishopastro.com/admin/user/signup?product=${type}&origin=https://www.shopastro.com${origin}`
  }

  return link
}
