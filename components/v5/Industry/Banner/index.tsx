import Image from 'next/image'
import Link from 'next/link'

import useTrailLink from '../../../../hooks/useTrail'
import { bannerData } from './data'

type IProps = {
  isMobile: boolean
}

const BelugaBanner = (props: IProps) => {
  const { isMobile } = props
  const freeLink = useTrailLink()
  const link = isMobile ? `/user/register` : freeLink('beluga_industry', 'beluga')

  return (
    <div>
      {bannerData.map((el, i) => {
        return (
          <div
            className={`md:flex ${
              i % 2 === 1 ? 'flex-row-reverse' : 'row'
            } justify-center  items-center px-[20px] md:px-[120px] py-[40px] md:py-[100px] bg-[${
              i % 2 === 1 ? '#F5F6FA' : '#fff'
            }]`}
            key={el.type}
          >
            <div className={`md:w-[689px] w-[100%] md:h-[230px] h-[${el.height}px] mb-[24px] md:mb-[0]`}>
              <Image
                src={isMobile ? el.image : el.imagePc}
                height={isMobile ? el.height : el.heightPc}
                width={isMobile ? 350 : el.widthPc}
                alt=""
              />
            </div>

            <div className={` ${i % 2 === 1 ? 'md:mr-[82px]' : 'md:ml-[82px]'} md:w-[430px]`}>
              <h3 className="md:font-[600] font-[500] text-[#0E1E46] md:text-[40px] text-[32px] mb-[16px] md:mb-[24px]">
                {el.title}
              </h3>
              <ul style={{ listStyle: 'disc' }} className="ml-[20px] md:ml-[0]">
                {el.info.map((item) => {
                  return (
                    <li
                      className="font-[400] text-[#535D77] text-[16px] md:text-[18px] leading-relaxed	 md:leading-loose"
                      key={item}
                    >
                      {item}
                    </li>
                  )
                })}
              </ul>
              <Link passHref href={link}>
                <div className="md:px-[0] w-[110px] md:w-[130px] mt-[16px] md:mt-[32px] flex item-center cursor-pointer">
                  <span className="flex-1 py-[9px] md:py-[14px] text-[16px] md:text-[18px] leading-[26px] text-[#FFF] font-[600] text-center bg-[#FE8953] rounded-[8px]">
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
