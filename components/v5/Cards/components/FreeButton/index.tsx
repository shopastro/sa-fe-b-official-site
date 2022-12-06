import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FreeButton: React.FC<FreeButtonProps> = (props) => {
  return (
    <Link href={props.href ?? ''} passHref>
      <div className="flex items-center w-[178px] py-[14px] px-[28px] border border-solid border-[#104CBC] rounded-[8px]">
        <span className="mr-[24px] text-[18px] text-[#004DD1]">免费试用</span>
        <span className="w-[23px] h-[23px] text-[#004DD1]">
          <Image
            width={23}
            height={23}
            src="https://media.cdn.ishopastro.com/upload/images/20221206-110145.png_2022-12-06-03-01-59.png"
            alt=""
          />
        </span>
      </div>
    </Link>
  )
}

export interface FreeButtonProps {
  href: string
}

export default FreeButton
