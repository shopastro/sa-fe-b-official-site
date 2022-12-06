import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SubTitle: React.FC = (props) => {
  return (
    <div className="flex mb-[4px] text-[20px] leading-[24px] text-[#365196]">
      <span className="w-[24px] h-[24px] mr-[20px]">
        <Image
          src="https://media.cdn.ishopastro.com/svg/shopastrohome/bbbdf92fef7fd9cb4dc206f8c099f0ea.svg"
          width={24}
          height={24}
          alt=""
        />
      </span>
      <span>{props.children}</span>
    </div>
  )
}

export default SubTitle
