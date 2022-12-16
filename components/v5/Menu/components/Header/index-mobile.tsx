import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const lightLogo = 'https://media.cdn.ishopastro.com/svg/shopastrohome/light-logo.svg'
const lightMenuIcon = 'https://media.cdn.ishopastro.com/svg/shopastrohome/4c69a3c7397eb8af714ef592bfa48af9.svg'
const darkLogo = 'https://media.cdn.ishopastro.com/svg/shopastrohome/dark-logo.svg'
const darkMenuIcon = 'https://media.cdn.ishopastro.com/svg/shopastrohome/d413df7dd29f56151bfb4be8d191eb70.svg'

const Menu: React.FC<MenuProps> = (props) => {
  const { theme = 'dark', onClick } = props
  const logo = theme === 'light' ? lightLogo : darkLogo
  const menuIcon = theme === 'light' ? lightMenuIcon : darkMenuIcon

  return (
    <div className="flex items-center justify-between h-[48px] w-[100vw] p-[12px]">
      <Link href="/" passHref>
        <h1 className="w-[110px] h-[20px] cursor-pointer">
          <Image src={logo} width={220} height={40} quality={100} alt="logo" />
        </h1>
      </Link>

      <div
        className="flex"
        onClick={() => {
          onClick?.()
        }}
      >
        <Image src={menuIcon} width={24} height={24} quality={100} alt="menu icon" />
      </div>
    </div>
  )
}

export interface MenuProps {
  theme?: 'dark' | 'light'
  onClick?: () => void
}

export default Menu
