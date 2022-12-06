import Image from 'next/image'
import Link from 'next/link'

const lightLogo = 'https://media.cdn.ishopastro.com/svg/shopastrohome/light-logo.svg'
const darkLogo = 'https://media.cdn.ishopastro.com/svg/shopastrohome/dark-logo.svg'

const Menu = () => {
  return (
    <div className="flex w-screen justify-center sticky top-0 text-[16px] leading-[20px] text-[#FFF] bg-[#003892] z-[100]">
      <div className="flex h-[120px] w-[1200px] items-center justify-between">
        <Link href="/" passHref>
          <h1 className="cursor-pointer">
            <Image src={darkLogo} width={220} height={40} quality={100} alt="logo" />
          </h1>
        </Link>

        <div className="flex items-center justify-between">
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
