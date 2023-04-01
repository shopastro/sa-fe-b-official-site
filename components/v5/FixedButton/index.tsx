import Link from 'next/link'
import React from 'react'

const FixedButton: React.FC<FreeButtonProps> = (props) => {
  const Button = (
    <div className="flex items-center fixed bottom-0 border-t-[1px] border-[#DBDBDB] left-0 right-0 px-[20px] py-[10px] bg-white cursor-pointer z-20 md:hidden">
      <span className="flex-1 py-[7px] text-[18px] leading-[26px] text-[#FFF] text-center font-[700] bg-[#FE8953] rounded-[8px]">
        {props.text ?? '免费试用'}
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

export default FixedButton
