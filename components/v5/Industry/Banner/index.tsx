import Image from 'next/image'
import Link from 'next/link'

import { freeLink } from '../../../../utils/freeTrail'
import { bannerData } from './data'

const BelugaBanner = () => {
  return (
    <div>
      {bannerData.map((el, i) => {
        return (
          <div
            className={`md:flex justify-center px-[20px] md:px-[120px] py-[40px] md:py-[100px] bg-[${
              i % 2 === 1 ? '#F5F6FA' : '#fff'
            }]`}
            key={el.type}
          >
            <div className="md:w-[689px] md:h-[294px] md:w-[335px] md:h-[223px] mb-[24px] md:mb-[0]">
              <Image src={el.image} height={294} width={689} alt={el.name} />
            </div>
            <div className="md:ml-[82px] md:w-[430px]">
              <h3 className="md:font-[600] font-[500] text-[#0E1E46] md:text-[40px] text-[32px] mb-[16px] md:mb-[24px]">
                {el.title}
              </h3>
              <ul style={{ listStyle: 'disc' }} className="ml-[20px] md:ml-[0]">
                {el.info.map((item) => {
                  return (
                    <li className="font-[400] text-[#535D77] text-[16px] md:text-[18px] leading-loose" key={item}>
                      {item}
                    </li>
                  )
                })}
              </ul>
              <Link passHref href={freeLink('beluga_industry', 'beluga')}>
                <div className="md:px-[0] w-[110px] md:w-[130px] mt-[16px] md:mt-[32px] flex item-center cursor-pointer">
                  <span
                    className="flex-1 py-[9px] md:py-[14px] text-[16px] md:text-[18px] leading-[26px] text-[#FFF] font-[600] text-center bg-[#004DD1] rounded-[8px]"
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
