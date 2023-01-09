import Image from 'next/image'
import React from 'react'

const SubTitle: React.FC = (props) => {
  return (
    <div className="flex mb-[4px] text-[18px] leading-[22px] text-[#365196] font-[700] md:text-[20px] md:leading-[24px]">
      <span className="w-[24px] h-[24px] mr-[20px]">
        <Image
          src="https://media.cdn.ishopastro.com/svg/shopastrohome/bbbdf92fef7fd9cb4dc206f8c099f0ea.svg"
          width={24}
          height={24}
          alt="icon"
        />
      </span>
      <span>{props.children}</span>
    </div>
  )
}

export default SubTitle
