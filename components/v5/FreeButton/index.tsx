import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FreeButton: React.FC<FreeButtonProps> = (props) => {
  const Button = (
    <div className="flex items-center py-[8px] px-[28px] border border-solid border-[#104CBC] rounded-[8px] md:py-[14px] cursor-pointer">
      <span className="mr-[24px] text-[16px] text-[#004DD1] font-[700] md:text-[18px]">{props.text ?? '免费试用'}</span>
      <span className="w-[23px] h-[23px] text-[#004DD1]">
        <Image
          width={23}
          height={23}
          src="https://media.cdn.ishopastro.com/upload/images/20221206-110145.png_2022-12-06-03-01-59.png"
          alt=""
        />
      </span>
    </div>
  )

  return props.href ? (
    <Link href={props.href ?? ''} passHref>
      {Button}
    </Link>
  ) : (
    <div
      onClick={() => {
        props?.onClick?.()
      }}
    >
      {Button}
    </div>
  )
}

export interface FreeButtonProps {
  href?: string
  text?: string
  onClick?: () => void
}

export default FreeButton
