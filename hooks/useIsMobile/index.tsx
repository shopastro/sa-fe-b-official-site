import { useEffect, useState } from 'react'

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(true)
  useEffect(() => {
    if (window.innerWidth > 768) setIsMobile(false)
  }, [])
  return isMobile
}

export default useIsMobile
