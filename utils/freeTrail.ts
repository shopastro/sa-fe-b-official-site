export const freeLink = (type: string, origin: string): string => {
  let link = `https://sys.admin.ishopastro.com/admin/user/signup?product=${type}&origin=https://www.shopastro.com${origin}`

  // if (host.includes('beta') || host.includes('localhost')) {
  //   link = `https://sys.admin.beta.ishopastro.com/admin/user/signup?product=${type}&origin=https://www.shopastro.com${origin}`
  // }

  return link
}
