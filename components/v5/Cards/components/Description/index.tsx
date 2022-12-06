import Image from 'next/image'
import Link from 'next/link'

const Description: React.FC = (props) => {
  return <div className="flex text-[16px] leading-[26px] text-[#535D77] ml-[44px]">{props.children}</div>
}

export default Description
