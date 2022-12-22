import React, { useEffect, useState } from 'react'

import Header from './components/Header/index-pc'

const Menu: React.FC<MenuProps> = (props) => {
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
      const scrollY = window.scrollY ?? window.pageYOffset
      setRadio(scrollY / 500 > 1 ? 1 : scrollY / 500)
    })
  }

  return (
    <div
      className="flex flex-col items-center justify-center sticky top-0 w-screen text-[16px] leading-[20px] text-[#FFF] z-[100]"
      style={{ height: `${120 - 40 * radio}px`, backgroundColor: `rgba(255, 255, 255, ${radio})` }}
    >
      <div className="absolute top-[50%] translate-y-[-50%]" style={{ opacity: `${1 - radio}` }}>
        <Header theme={theme} />
      </div>
      <div className="absolute top-[50%] translate-y-[-50%]" style={{ opacity: `${radio}` }}>
        <Header theme={'dark'} />
      </div>
    </div>
  )
}

export interface MenuProps {
  theme?: 'dark' | 'light'
}

export default Menu
