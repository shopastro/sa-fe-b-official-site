import Image from 'next/image'
import Link from 'next/link'

const Description: React.FC = (props) => {
  return <div className="flex py-[80px]">{props.children}</div>
}

export default Description
