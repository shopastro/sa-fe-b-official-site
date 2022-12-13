import Image from 'next/image'
import Link from 'next/link'

const lightLogo = 'https://media.cdn.ishopastro.com/svg/shopastrohome/light-logo.svg'
const lightMenuIcon = 'https://media.cdn.ishopastro.com/svg/shopastrohome/4c69a3c7397eb8af714ef592bfa48af9.svg'
const darkLogo = 'https://media.cdn.ishopastro.com/svg/shopastrohome/dark-logo.svg'
const darkMenuIcon = 'https://media.cdn.ishopastro.com/svg/shopastrohome/d413df7dd29f56151bfb4be8d191eb70.svg'

const Menu = () => {
  return (
    <div className="flex w-screen justify-center sticky top-0 text-[16px] leading-[20px] text-[#FFF] bg-[#003892] z-[100]">
      <div className="flex items-center justify-between h-[48px] w-[100vw] p-[12px] md:h-[120px] md:w-[1200px]">
        <Link href="/" passHref>
          <h1 className="w-[110px] h-[20px] md:w-[220px] md:h-[40px] cursor-pointer">
            <Image src={lightLogo} width={220} height={40} quality={100} alt="logo" />
          </h1>
        </Link>

        <div className="flex md:hidden">
          <Image src={lightMenuIcon} width={24} height={24} quality={100} alt="menu icon" />
        </div>

        <div className="items-center justify-between hidden md:flex">
          <div className="flex items-center justify-between">
            <div className="mx-[20px] cursor-pointer">DTC建站</div>
            <div className="mx-[20px] cursor-pointer">B2B建站</div>
            <div className="mx-[20px] cursor-pointer">白鲸营销</div>
            <div className="mx-[20px] cursor-pointer">解决方案</div>
            <div className="mx-[20px] cursor-pointer">关于</div>
            <div className="mx-[20px] cursor-pointer">帮助</div>
          </div>
          <div className="ml-[56px] flex items-center">
            <div className="mr-[16px] cursor-pointer">登录</div>
            <Link href="/" passHref>
              <div className="cursor-pointer rounded-[8px] border border-solid border-[#FFF] px-[30px] py-[10px]">
                免费试用
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
