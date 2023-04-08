import queryString from 'query-string'
import { useEffect, useState } from 'react'

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(true)
  const [beta, setBeta] = useState('')
  const [code, setCode] = useState<string | (string | null)[] | null>('')
  const [refer, setRefer] = useState('')
  const freeLink = (type: string, origin?: string): string => {
    let link = `https://sys.admin.${beta}ishopastro.com/admin/user/store-login?product=${type}`

    if (origin) {
      link = `https://sys.admin.${beta}ishopastro.com/admin/user/store-login?product=${type}`
    }

    if (code) {
      link = `https://sys.admin.${beta}ishopastro.com/admin/user/store-login?product=${type}&code=${code}`
    }

    if (refer) {
      link = `https://sys.admin.${beta}ishopastro.com/admin/user/store-login?product=${type}&refer=${refer}`
    }

    if (isMobile) {
      link = `/user/register`
      if (code) {
        link = `/user/register?code=${code}`
      }
    }

    return link
  }

  useEffect(() => {
    if (window.innerWidth > 768) setIsMobile(false)
    if (/beta/.test(location.host)) setBeta('beta.')
    if (location.search && queryString.parse(location.search).code) setCode(queryString.parse(location.search).code)
    if (sessionStorage.getItem('refer')) setRefer(sessionStorage.getItem('refer') || '')
  }, [])

  return freeLink
}

export default useIsMobile
