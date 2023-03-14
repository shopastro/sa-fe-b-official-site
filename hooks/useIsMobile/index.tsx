import { useEffect, useState } from 'react'

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  const handleResize = (e: any) => {
    if (!e.srcElement.documentElement) {
      return
    }

    const offsetWidth =
      (e.srcElement ? e.srcElement.documentElement?.offsetWidth : false) ||
      window.pageXOffset ||
      (e.srcElement ? e.srcElement.body?.offsetWidth : 0)

    if (offsetWidth < 786) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleResize, true)
    return () => {
      window.removeEventListener('scroll', handleResize, true)
    }
  }, [])

  useEffect(() => {
    if (window.innerWidth > 768) setIsMobile(false)
  }, [])
  return isMobile
}

export default useIsMobile
