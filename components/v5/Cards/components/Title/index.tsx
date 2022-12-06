import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Title: React.FC = (props) => {
  return <div className="flex mb-[40px] text-[48px] leading-[62px] text-[#0E1E46] font-bold">{props.children}</div>
}

export default Title
