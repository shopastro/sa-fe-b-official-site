import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import Header from './components/Header/index-pc'

const Menu: React.FC<MenuProps> = (props) => {
  const { route } = useRouter()
  const { theme = 'dark' } = props
  const [radio, setRadio] = useState(0)

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function handleScroll() {
    window.requestAnimationFrame(() => {
      const offset = route === '/product' ? 200 : 500
      const scrollY = window.scrollY ?? window.pageYOffset
      setRadio(scrollY / offset > 1 ? 1 : scrollY / offset)
    })
  }

  return (
    <div
      className="hidden md:flex flex-col items-center justify-center sticky top-0 w-screen text-[16px] leading-[20px] text-[#FFF] z-[100]"
      style={{
        height: `${120 - 40 * radio}px`,
        backgroundColor: `rgba(255, 255, 255, ${route === '/about' && radio < 0.7 ? 0.7 : radio})`
      }}
    >
      <Header theme={theme} style={{ opacity: `${1 - radio}` }} />
      <Header theme={'dark'} style={{ opacity: `${radio}` }} />
    </div>
  )
}

export interface MenuProps {
  theme?: 'dark' | 'light'
}

export default Menu
