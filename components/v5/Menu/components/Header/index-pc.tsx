import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const lightLogo = 'https://media.cdn.ishopastro.com/svg/shopastrohome/light-logo.svg'
const darkLogo = 'https://media.cdn.ishopastro.com/svg/shopastrohome/dark-logo.svg'
const lightIcon = 'https://media.cdn.ishopastro.com/svg/shopastrohome/1a3478cfd3dbd8a94bd03643bd927b16.svg'
const darkIcon = 'https://media.cdn.ishopastro.com/svg/shopastrohome/d23ef83b042d7975657988671fcacee5.svg'

const Menu: React.FC<MenuProps> = (props) => {
  const { theme = 'dark' } = props
  const logo = theme === 'light' ? lightLogo : darkLogo
  const icon = theme === 'light' ? lightIcon : darkIcon

  const [showMore, setShowMore] = useState(false)
  const [fixedStyle, setFixedStyle] = useState({ top: 0, left: 0 })
  function handleMouseEnter(e: any) {
    const { top, left } = e.target?.getBoundingClientRect() ?? {}
    const leftOffset = (window.innerWidth - 1200) / 2
    setShowMore(true)
    setFixedStyle({ top: top + 20, left: left - leftOffset })
  }

  function handleMouseLeave() {}

  return (
    <>
      <div
        className="flex items-center justify-between w-[1200px] p-[12px]"
        style={{
          color: theme === 'light' ? '#FFF' : '#3E3E40'
        }}
      >
        <Link href="/" passHref>
          <h1 className="w-[220px] h-[40px] cursor-pointer">
            <Image src={logo} width={220} height={40} quality={100} alt="logo" />
          </h1>
        </Link>

        <div className="flex items-center justify-between">
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
            <div
              className="flex items-center relative mx-[20px] cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link href="/about">关于</Link>
              <div className="flex items-center ml-[12px]">
                <Image src={icon} width={10} height={5} quality={100} alt="icon" />
              </div>
            </div>
            <div className="mx-[20px] cursor-pointer">
              <Link href="https://shopastro.feishu.cn/wiki/wikcnLesUeY4fIzlf9MmebbYhxg">帮助</Link>
            </div>
          </div>
          <div className="ml-[56px] flex items-center">
            <div className="mr-[16px] cursor-pointer">
              <Link href="https://sys.admin.ishopastro.com/admin/user/signup">登录</Link>
            </div>
            <div
              className="cursor-pointer rounded-[8px] border border-solid border-[#FFF] px-[30px] py-[10px]"
              style={{
                color: theme === 'light' ? '#FFF' : '#004DD1',
                borderColor: theme === 'light' ? '#FFF' : '#004DD1'
              }}
            >
              <Link href="/product">免费试用</Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className="flex flex-col fixed p-[20px] text-[14px] leading-[22px] text-[#222] bg-white bg-opacity-90 rounded-[4px]"
        style={{
          display: showMore ? 'flex' : 'none',
          top: `${fixedStyle.top}px`,
          left: `${fixedStyle.left}px`
        }}
      >
        <Link href="/about" passHref>
          <span className="mb-[16px] whitespace-nowrap">关于</span>
        </Link>
        <Link href="/partners" passHref>
          <span className="whitespace-nowrap">渠道合作&生态联盟</span>
        </Link>
      </div> */}
    </>
  )
}

export interface MenuProps {
  theme?: 'dark' | 'light'
}

export default Menu
