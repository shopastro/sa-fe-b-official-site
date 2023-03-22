import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import type { Pathname } from './components/Header/constant'
import Header from './components/Header/index-mobile'

const darkLogo = 'https://media.cdn.ishopastro.com/svg/shopastrohome/dark-logo.svg'
const addIcon = 'https://media.cdn.ishopastro.com/svg/shopastrohome/7a7423a5d27fb477da06078dc3a6689a.svg'
const minusIcon = 'https://media.cdn.ishopastro.com/svg/shopastrohome/f0c77881530c6ee43515438ef4d8265f.svg'

const Menu: React.FC<MenuProps> = (props) => {
  const { theme = 'dark' } = props

  const [showMenu, setShowMenu] = useState(false)
  const [showMore, setShowMore] = useState<Pathname>({})
  const [radio, setRadio] = useState(0)

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
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

      {
        <div
          className="md:flex flex-col fixed top-0 left-0 w-screen h-screen bg-[#FFF] z-[100]"
          style={{ display: showMenu ? 'flex' : 'none' }}
        >
          <div
            className="flex items-center justify-between h-[48px] w-[100vw] p-[12px]"
            style={{ borderBottom: '1px solid rgba(34, 34, 34, 0.1)' }}
          >
            <Link href="/" passHref>
              <h1 className="w-[110px] h-[20px] md:w-[220px] md:h-[40px]">
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
                alt="close icon"
              />
            </div>
          </div>

          <Link href="/dtc" passHref>
            <div
              className="p-[16px] text-[16px] leading-[24px] text-[#222]"
              style={{ borderBottom: '1px solid rgba(34, 34, 34, 0.1)' }}
            >
              DTC建站
            </div>
          </Link>
          <Link href="/b2b" passHref>
            <div
              className="p-[16px] text-[16px] leading-[24px] text-[#222]"
              style={{ borderBottom: '1px solid rgba(34, 34, 34, 0.1)' }}
            >
              B2B建站
            </div>
          </Link>
          <div className="flex flex-col">
            <div
              className="flex justify-between p-[16px] text-[16px] leading-[24px] text-[#222]"
              style={{ borderBottom: '1px solid rgba(34, 34, 34, 0.1)' }}
              onClick={() => {
                setShowMore({ ...showMore, beluga: !!!showMore.beluga })
              }}
            >
              <Link href="/beluga" passHref>
                <div className="text-[#222]">白鲸营销</div>
              </Link>
              <div className="flex">
                <Image src={showMore.beluga ? minusIcon : addIcon} width={24} height={24} quality={100} alt="logo" />
              </div>
            </div>
            <div
              className="flex flex-col text-[14px] leading-[22px] text-[#222] bg-[#F9F9F9] overflow-hidden transition-all"
              style={{ maxHeight: showMore.beluga ? '100vh' : 0 }}
            >
              <Link href="/industry" passHref>
                <span
                  className="flex px-[48px] text-[#222] py-[16px]"
                  style={{ borderBottom: '1px solid rgba(34, 34, 34, 0.1)' }}
                >
                  行业情报
                </span>
              </Link>
              <Link href="/copymaster" passHref>
                <span
                  className="flex px-[48px] text-[#222] py-[16px]"
                  style={{ borderBottom: '1px solid rgba(34, 34, 34, 0.1)' }}
                >
                  文案大师
                </span>
              </Link>
            </div>
          </div>

          <Link href="/solutions" passHref>
            <div
              className="p-[16px] text-[16px] leading-[24px] text-[#222]"
              style={{ borderBottom: '1px solid rgba(34, 34, 34, 0.1)' }}
            >
              解决方案
            </div>
          </Link>
          <div className="flex flex-col">
            <div
              className="flex justify-between p-[16px] text-[16px] leading-[24px] text-[#222]"
              style={{ borderBottom: '1px solid rgba(34, 34, 34, 0.1)' }}
              onClick={() => {
                setShowMore({ ...showMore, about: !!!showMore.about })
              }}
            >
              <Link href="/about" passHref>
                <div className="text-[#222]">关于</div>
              </Link>
              <div className="flex">
                <Image src={showMore.about ? minusIcon : addIcon} width={24} height={24} quality={100} alt="logo" />
              </div>
            </div>
            <div
              className="flex flex-col text-[14px] leading-[22px] text-[#222] bg-[#F9F9F9] overflow-hidden transition-all"
              style={{ maxHeight: showMore.about ? '100vh' : 0 }}
            >
              <Link href="/about" passHref>
                <span
                  className="flex px-[48px] text-[#222] py-[16px]"
                  style={{ borderBottom: '1px solid rgba(34, 34, 34, 0.1)' }}
                >
                  关于我们
                </span>
              </Link>
              <Link href="/partners" passHref>
                <span
                  className="flex px-[48px] text-[#222] py-[16px]"
                  style={{ borderBottom: '1px solid rgba(34, 34, 34, 0.1)' }}
                >
                  渠道合作&生态联盟
                </span>
              </Link>
            </div>
          </div>
          <a
            href="https://shopastro.feishu.cn/wiki/wikcnLesUeY4fIzlf9MmebbYhxg"
            target={'_blank'}
            rel="noreferrer"
            className="p-[16px] text-[16px] leading-[24px] text-[#222]"
            style={{ borderBottom: '1px solid rgba(34, 34, 34, 0.1)' }}
          >
            帮助
          </a>
        </div>
      }
    </>
  )
}

export interface MenuProps {
  theme?: 'dark' | 'light'
}

export default Menu
