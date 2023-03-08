import Image from 'next/image'
import Link from 'next/link'
import { useContainer } from 'unstated-next'

import detectionStore from '../../../../store/detectionStore'
import { freeLink } from '../../../../utils/freeTrail'
import { bannerData } from './data'

const BelugaBanner = () => {
  const { setShowMoadl, setButtonType } = useContainer(detectionStore)

  return (
    <div>
      {bannerData.map((el, i) => {
        return (
          <div
            className={`flex justify-center px-[120px] py-[100px] bg-[${i % 2 === 1 ? '#F5F6FA' : '#fff'}]`}
            key={el.type}
          >
            <Image src={el.image} height={100} width={100} alt={el.name} />
            <div className="ml-[82px]">
              <div></div>
              <Link passHref href={freeLink('beluga_industry', 'beluga')}>
                <div className="w-screen px-[38px] md:px-[0] md:w-[180px] mt-[24px] flex item-center cursor-pointer">
                  <span
                    className="flex-1 py-[9px] md:py-[14px] text-[16px] md:text-[20px] leading-[26px] text-[#FFF] font-[700] text-center bg-[#004DD1] rounded-[8px]"
                    style={{ backgroundColor: '#FE8953' }}
                  >
                    免费试用
                  </span>
                </div>
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default BelugaBanner
