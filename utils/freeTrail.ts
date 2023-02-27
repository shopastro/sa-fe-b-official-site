export const freeLink = (type: string, origin?: string): string => {
  let link = `https://sys.admin.ishopastro.com/admin/user/store-login?product=${type}`
  if (origin) {
    link = `https://sys.admin.ishopastro.com/admin/user/store-login?product=${type}`
  }

  return link
}
