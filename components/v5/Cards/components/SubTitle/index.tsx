import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SubTitle: React.FC = (props) => {
  return <div className="flex py-[80px]">{props.children}</div>
}

export default SubTitle
