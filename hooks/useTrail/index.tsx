import { useEffect, useState } from 'react'

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(true)
  const [beta, setBeta] = useState('')
  const [refer, setRefer] = useState('')
  const freeLink = (type: string, origin?: string): string => {
    let link = `https://sys.admin.${beta}ishopastro.com/admin/user/store-login?product=${type}`

    if (origin) {
      link = `https://sys.admin.${beta}ishopastro.com/admin/user/store-login?product=${type}`
    }

    if (refer) {
      link = `https://sys.admin.${beta}ishopastro.com/admin/user/store-login?product=${type}&refer=${refer}`
    }

    if (isMobile) {
      link = '/user/register'
    }

    return link
  }

  useEffect(() => {
    if (window.innerWidth > 768) setIsMobile(false)
    if (/beta/.test(location.host)) setBeta('beta.')
    if (sessionStorage.getItem('refer')) setRefer(sessionStorage.getItem('refer') || '')
  }, [])

  return freeLink
}

export default useIsMobile
