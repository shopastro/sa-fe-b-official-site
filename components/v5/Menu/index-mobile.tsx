import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import useIsMobile from '../../../hooks/useIsMobile'
import Header from './components/Header/index-mobile'

const lightLogo = 'https://media.cdn.ishopastro.com/svg/shopastrohome/light-logo.svg'
const lightMenuIcon = 'https://media.cdn.ishopastro.com/svg/shopastrohome/4c69a3c7397eb8af714ef592bfa48af9.svg'
const darkLogo = 'https://media.cdn.ishopastro.com/svg/shopastrohome/dark-logo.svg'
const darkMenuIcon = 'https://media.cdn.ishopastro.com/svg/shopastrohome/d413df7dd29f56151bfb4be8d191eb70.svg'

const Menu: React.FC<MenuProps> = (props) => {
  const { theme = 'dark' } = props
  const logo = theme === 'light' ? lightLogo : darkLogo
  const menuIcon = theme === 'light' ? lightMenuIcon : darkMenuIcon

  const [showMenu, setShowMenu] = useState(false)
  const [radio, setRadio] = useState(0)
  const isMobile = useIsMobile()

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }
  }, [showMenu])

  function handleScroll() {
    window.requestAnimationFrame(() => {
      const scrollY = window.scrollY ?? window.pageYOffset
      setRadio(scrollY / 500 > 1 ? 1 : scrollY / 500)
    })
  }

  return (
    <>
      <div
        className="flex justify-center sticky top-0 w-screen h-[48px] text-[16px] leading-[20px] text-[#FFF] z-[100]"
        style={{
          backgroundColor: `rgba(255, 255, 255, ${radio})`
        }}
      >
        <div className="absolute top-[50%] translate-y-[-50%]" style={{ opacity: `${1 - radio}` }}>
          <Header
            theme={theme}
            onClick={() => {
              setShowMenu(!showMenu)
            }}
          />
        </div>
        <div className="absolute top-[50%] translate-y-[-50%]" style={{ opacity: `${radio}` }}>
          <Header
            theme={'dark'}
            onClick={() => {
              setShowMenu(!showMenu)
            }}
          />
        </div>
      </div>

      <div
        className="flex flex-col fixed top-0 left-0 w-screen h-screen bg-[#FFF] z-[100]"
        style={{ display: showMenu ? 'flex' : 'none' }}
      >
        <div
          className="flex items-center justify-between h-[48px] w-[100vw] p-[12px]"
          style={{ borderBottom: '1px solid rgba(34, 34, 34, 0.1)' }}
        >
          <Link href="/" passHref>
            <h1 className="w-[110px] h-[20px] md:w-[220px] md:h-[40px] cursor-pointer">
              <Image src={darkLogo} width={220} height={40} quality={100} alt="logo" />
            </h1>
          </Link>

          <div
            className="flex md:hidden"
            onClick={() => {
              setShowMenu(!showMenu)
            }}
          >
            <Image
              src={'https://media.cdn.ishopastro.com/svg/shopastrohome/c860f2294c0fb9540db2a0fa995cf8ea.svg'}
              width={24}
              height={24}
              quality={100}
              alt="menu icon"
            />
          </div>
        </div>

        <div
          className="p-[18px] text-[16px] leading-[20px] text-[#222]"
          style={{ borderBottom: '1px solid rgba(34, 34, 34, 0.1)' }}
        >
          <Link href="/dtc">DTC建站</Link>
        </div>
        <div
          className="p-[18px] text-[16px] leading-[20px] text-[#222]"
          style={{ borderBottom: '1px solid rgba(34, 34, 34, 0.1)' }}
        >
          <Link href="/b2b">B2B建站</Link>
        </div>
        <div
          className="p-[18px] text-[16px] leading-[20px] text-[#222]"
          style={{ borderBottom: '1px solid rgba(34, 34, 34, 0.1)' }}
        >
          <Link href="/beluga">白鲸营销</Link>
        </div>
        <div
          className="p-[18px] text-[16px] leading-[20px] text-[#222]"
          style={{ borderBottom: '1px solid rgba(34, 34, 34, 0.1)' }}
        >
          <Link href="/solutions">解决方案</Link>
        </div>
        <div
          className="p-[18px] text-[16px] leading-[20px] text-[#222]"
          style={{ borderBottom: '1px solid rgba(34, 34, 34, 0.1)' }}
        >
          <Link href="/about">关于</Link>
          <div></div>
        </div>
        <div
          className="p-[18px] text-[16px] leading-[20px] text-[#222]"
          style={{ borderBottom: '1px solid rgba(34, 34, 34, 0.1)' }}
        >
          <Link href="/help">帮助</Link>
        </div>
      </div>
    </>
  )
}

export interface MenuProps {
  theme?: 'dark' | 'light'
}

export default Menu
