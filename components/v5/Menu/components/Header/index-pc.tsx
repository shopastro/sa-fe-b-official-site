import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'

import useTrailLink from '../../../../../hooks/useTrail'
import { routeListMap, routeMapObj } from './constant'
import type { Pathname } from './constant'

const lightLogo = 'https://media.cdn.ishopastro.com/svg/shopastrohome/light-logo.svg'
const darkLogo = 'https://media.cdn.ishopastro.com/svg/shopastrohome/dark-logo.svg'
const lightIcon = 'https://media.cdn.ishopastro.com/svg/shopastrohome/1a3478cfd3dbd8a94bd03643bd927b16.svg'
const darkIcon = 'https://media.cdn.ishopastro.com/svg/shopastrohome/d23ef83b042d7975657988671fcacee5.svg'

const Menu: React.FC<MenuProps> = (props) => {
  const { theme = 'dark', style = {} } = props
  const logo = theme === 'light' ? lightLogo : darkLogo
  const icon = theme === 'light' ? lightIcon : darkIcon
  const activeColor = theme === 'light' ? '#FE8952' : '#004DD1'
  const freeLink = useTrailLink()
  const { route } = useRouter()
  const [loginLink, setLoginLink] = useState('https://sys.admin.ishopastro.com/admin/user/login')

  const [showMore, setShowMore] = useState<Pathname>({})
  const [fixedStyle, setFixedStyle] = useState({ top: 0, left: 0 })
  const token = useRef<any>(null)
  //当前hover 的二级菜单
  const currentSubMore = Object.keys(showMore)?.[0] || ''

  function handleMouseEnter(e: any, type: string) {
    const { top, left } = e.target?.getBoundingClientRect() ?? {}
    setShowMore({ [type]: true })
    setFixedStyle({ top: top + 32, left })
  }

  function handleMouseLeave() {
    token.current = setTimeout(() => {
      setShowMore({})
    }, 200)
  }

  function handleDialogEnter() {
    clearTimeout(token.current)
  }

  function handleDialogLeave() {
    setShowMore({})
  }

  useEffect(() => {
    if (/beta/.test(location.host)) {
      setLoginLink('https://sys.admin.beta.ishopastro.com/admin/user/login')
    }
  }, [])

  return (
    <>
      <div
        className="flex items-center justify-between absolute top-[50%] w-[1200px] p-[12px] translate-y-[-50%]"
        style={{
          color: theme === 'light' ? '#FFF' : '#3E3E40',
          ...style
        }}
      >
        <Link href="/" passHref>
          <div className="w-[220px] h-[40px] cursor-pointer">
            <Image src={logo} width={220} height={40} quality={100} alt="logo" />
          </div>
        </Link>

        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between">
            <Link href="/dtc" passHref style={{ color: 'inherit' }}>
              <div className="mx-[20px] cursor-pointer " style={{ color: route === '/dtc' ? activeColor : 'inherit' }}>
                DTC建站
              </div>
            </Link>
            <Link href="/b2b" passHref style={{ color: 'inherit' }}>
              <div className="mx-[20px] cursor-pointer" style={{ color: route === '/b2b' ? activeColor : 'inherit' }}>
                B2B建站
              </div>
            </Link>
            <Link href="/beluga" passHref style={{ color: 'inherit' }}>
              <div
                className="flex items-center relative px-[10px] mx-[10px] cursor-pointer"
                style={{ color: routeListMap.beluga.includes(route) ? activeColor : 'inherit' }}
                onMouseEnter={(e) => {
                  handleMouseEnter(e, 'beluga')
                }}
                onMouseLeave={handleMouseLeave}
              >
                白鲸营销
                <div className="flex items-center ml-[12px]">
                  <Image src={icon} width={10} height={5} quality={100} alt="icon" />
                </div>
              </div>
            </Link>
            <Link href="/solutions" passHref style={{ color: 'inherit' }}>
              <div
                className="mx-[20px] cursor-pointer"
                style={{ color: route === '/solutions' ? activeColor : 'inherit' }}
              >
                解决方案
              </div>
            </Link>
            <Link href="/about" passHref style={{ color: 'inherit' }}>
              <div
                className="flex items-center relative px-[10px] mx-[10px] cursor-pointer"
                style={{ color: routeListMap.about.includes(route) ? activeColor : 'inherit' }}
                onMouseEnter={(e) => {
                  handleMouseEnter(e, 'about')
                }}
                onMouseLeave={handleMouseLeave}
              >
                关于
                <div className="flex items-center ml-[12px]">
                  <Image src={icon} width={10} height={5} quality={100} alt="icon" />
                </div>
              </div>
            </Link>
            <a href="https://shopastro.feishu.cn/wiki/wikcnLesUeY4fIzlf9MmebbYhxg" target={'_blank'} rel="noreferrer">
              <div className={`mx-[20px] cursor-pointer `} style={{ color: theme === 'light' ? '#fff' : '#0E1E46' }}>
                帮助
              </div>
            </a>
          </div>
          <div className="ml-[56px] flex items-center">
            <Link href={loginLink} passHref style={{ color: 'inherit' }}>
              <div className="mr-[16px] cursor-pointer">登录</div>
            </Link>
            <Link href={freeLink('', '')} passHref>
              <div
                className={`cursor-pointer rounded-[8px] border border-solid  px-[28px] py-[10px] font-[600]`}
                style={{
                  color: theme === 'light' ? '#FFF' : '#0E1E46',
                  borderColor: theme === 'light' ? '#FFF' : '#0E1E46'
                }}
              >
                免费试用
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* 关于二级 */}
      {currentSubMore && (
        <div
          className="flex flex-col fixed p-[20px] text-[14px] leading-[22px] text-[#222] bg-white bg-opacity-90 rounded-[4px]"
          style={{
            display: currentSubMore ? 'flex' : 'none',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            top: `${fixedStyle.top}px`,
            left: `${fixedStyle.left}px`
          }}
          onMouseEnter={handleDialogEnter}
          onMouseLeave={handleDialogLeave}
        >
          {routeMapObj[currentSubMore]?.map((el, i) => {
            return (
              <Link href={el.link} passHref key={el.name}>
                <span
                  className={`mb-[${
                    i < routeMapObj[currentSubMore].length - 1 ? '16px' : ''
                  }] whitespace-nowrap cursor-pointer hover:text-[#004DD1] hover:font-[700] text-[#0E1E46] inline-block`}
                >
                  {el.name}
                </span>
              </Link>
            )
          })}
        </div>
      )}
    </>
  )
}

export interface MenuProps {
  theme?: 'dark' | 'light'
  style?: React.CSSProperties
}

export default Menu
