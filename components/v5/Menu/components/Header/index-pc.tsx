import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const lightLogo = 'https://media.cdn.ishopastro.com/svg/shopastrohome/light-logo.svg'
const darkLogo = 'https://media.cdn.ishopastro.com/svg/shopastrohome/dark-logo.svg'

const Menu: React.FC<MenuProps> = (props) => {
  const { theme = 'dark' } = props
  const logo = theme === 'light' ? lightLogo : darkLogo

  return (
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
            <Link href="https://mystro.admin.ishopastro.com/admin/user/login">登录</Link>
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
  )
}

export interface MenuProps {
  theme?: 'dark' | 'light'
}

export default Menu
