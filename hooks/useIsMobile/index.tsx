import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(true)
  const { route } = useRouter()

  const handleResize = (e: any) => {
    const screenWidth = window.document.documentElement.clientWidth

    if (screenWidth < 786) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize, true)
    return () => {
      window.removeEventListener('resize', handleResize, true)
    }
  }, [route])

  useEffect(() => {
    if (window.document.documentElement.clientWidth > 768) {
      setIsMobile(false)
    } else {
      setIsMobile(true)
    }
  }, [route])

  return isMobile
}

export default useIsMobile
