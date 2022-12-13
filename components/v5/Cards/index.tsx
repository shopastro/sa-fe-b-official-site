import Image from 'next/image'
import Link from 'next/link'

import AdsCard from './components/AdsCard'
import QuickCard from './components/QuickCard'
import SellCard from './components/SellCard'
import UserCard from './components/UserCard'

const Cards = () => {
  return (
    <div className="flex flex-col items-center md:py-[80px]">
      <QuickCard />
      <AdsCard />
      <SellCard />
      <UserCard />
    </div>
  )
}

export default Cards
