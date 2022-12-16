import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import useIsMobile from '../../../hooks/useIsMobile'

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
        className="flex w-screen justify-center sticky top-0 text-[16px] leading-[20px] text-[#FFF] z-[100]"
        style={{
          color: theme === 'light' ? '#FFF' : '#3E3E40',
          backgroundColor: `rgba(255, 255, 255, ${radio})`
        }}
      >
        <div
          className="flex items-center justify-between h-[48px] w-[100vw] p-[12px] md:h-[120px] md:w-[1200px]"
          style={{
            height: isMobile ? '48px' : `${120 - 40 * radio}px`
          }}
        >
          <Link href="/" passHref>
            <h1 className="w-[110px] h-[20px] md:w-[220px] md:h-[40px] cursor-pointer">
              <Image src={logo} width={220} height={40} quality={100} alt="logo" />
            </h1>
          </Link>

          <div
            className="flex md:hidden"
            onClick={() => {
              setShowMenu(!showMenu)
            }}
          >
            <Image src={menuIcon} width={24} height={24} quality={100} alt="menu icon" />
          </div>

          <div className="items-center justify-between hidden md:flex">
            <div className="flex items-center justify-between">
              <div className="mx-[20px] cursor-pointer">
                <Link href="/dtc">DTC建站</Link>
              </div>
              <div className="mx-[20px] cursor-pointer">
                <Link href="/b2b">B2B建站</Link>
              </div>
              <div className="mx-[20px] cursor-pointer">
                <Link href="/beluga">白鲸营销</Link>
              </div>
              <div className="mx-[20px] cursor-pointer">
                <Link href="/solutions">解决方案</Link>
              </div>
              <div className="mx-[20px] cursor-pointer">
                <Link href="/about">关于</Link>
                <div></div>
              </div>
              <div className="mx-[20px] cursor-pointer">
                <Link href="/help">帮助</Link>
              </div>
            </div>
            <div className="ml-[56px] flex items-center">
              <div className="mr-[16px] cursor-pointer">
                <Link href="/">登录</Link>
              </div>
              <div
                className="cursor-pointer rounded-[8px] border border-solid border-[#FFF] px-[30px] py-[10px]"
                style={{
                  color: theme === 'light' ? '#FFF' : '#004DD1',
                  borderColor: theme === 'light' ? '#FFF' : '#004DD1'
                }}
              >
                <Link href="/">免费试用</Link>
              </div>
            </div>
          </div>
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
