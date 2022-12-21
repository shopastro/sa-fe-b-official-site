import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Join = () => {
  return (
    <div className="flex flex-col w-screen md:items-center">
      <div className="flex flex-col relative px-[20px] pb-[40px] overflow-hidden md:w-[1200px] md:pb-[80px]">
        <div className="mb-[16px] text-[24px] leading-[28px] text-[#0E1E46] font-[600] md:mb-[32px] md:text-[32px] md:leading-[38px]">
          加入我们
        </div>
        <div className="flex flex-col md:flex-row">
          <Link href="https://www.zhipin.com/gongsi/0c4a441aa82110141nx82Nm9EFI~.html" passHref>
            <div className="flex items-center justify-between flex-1 p-[32px] mb-[20px] bg-[#F6F7F8] rounded-[12px] cursor-pointer md:mb-0 md:mr-[32px] md:py-[52px]">
              <div className="flex items-center">
                <span className="w-[48px] h-[48px] mr-[24px]">
                  <Image
                    width={80}
                    height={80}
                    quality={100}
                    src="https://media.cdn.ishopastro.com/svg/shopastrohome/a19f4bec249d769588c66ded629c46dc.svg"
                    alt="icon"
                  />
                </span>
                <span className="text-[22px] leading-[28px] text-[#000] font-[700]">简历投递</span>
              </div>
              <span className="w-[33px] h-[33px]">
                <Image
                  width={33}
                  height={33}
                  quality={100}
                  src="https://media.cdn.ishopastro.com/svg/shopastrohome/fea6e689fe0e5602b45342f184e4e01a.svg"
                  alt="icon"
                />
              </span>
            </div>
          </Link>

          <Link href="https://www.zhipin.com/gongsir/0c4a441aa82110141nx82Nm9EFI~.html?ka=company-jobs" passHref>
            <div className="flex items-center justify-between flex-1 p-[32px] bg-[#F6F7F8] rounded-[12px] cursor-pointer md:py-[52px]">
              <div className="flex items-center">
                <span className="w-[48px] h-[48px] mr-[24px]">
                  <Image
                    width={80}
                    height={80}
                    quality={100}
                    src="https://media.cdn.ishopastro.com/svg/shopastrohome/7964c6e75fc6c874daeffe9e1041b66f.svg"
                    alt="icon"
                  />
                </span>
                <span className="text-[22px] leading-[28px] text-[#000] font-[700]">在招岗位</span>
              </div>
              <span className="w-[33px] h-[33px]">
                <Image
                  width={33}
                  height={33}
                  quality={100}
                  src="https://media.cdn.ishopastro.com/svg/shopastrohome/fea6e689fe0e5602b45342f184e4e01a.svg"
                  alt="icon"
                />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Join
