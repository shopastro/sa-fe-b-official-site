import { Input } from 'antd-mobile'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import useIsMobile from '../../../..//hooks/useIsMobile'
import useTrailLink from '../../../../hooks/useTrail'

const Banner = () => {
  const [phone, setPhone] = useState('')
  const [showError, setShowError] = useState(false)
  const isMobile = useIsMobile()
  const freeLink = useTrailLink()
  const trailLink = () => {
    if (isMobile) {
      if (phone && !showError) {
        return `/user/register?phoneNum=${Buffer.from(phone).toString('base64')}`
      } else {
        return '#'
      }
    } else {
      return freeLink('beluga_industry', 'beluga')
    }
  }

  const handleInputNumber = (v: string) => {
    if (v.length <= 11) {
      setShowError(false)
      setPhone(v)
      if (v.length === 11) {
        const isRightPhone = Boolean(/^(1|2)(3|4|5|6|7|8|9)\d{9}$/g.test(v))
        setShowError(!isRightPhone)
      }
    }
  }

  return (
    <div className="flex justify-center w-screen text-white">
      <div className="flex flex-col items-center relative px-[20px] overflow-hidden md:w-[1200px] md:h-[830px]">
        <div className="flex flex-col justify-between relative z-10 md:flex-row md:w-[1200px] md:mb-[42px]">
          <div className="flex flex-col mt-[18px] md:mt-[85px] md:mr-[-35px]">
            <h1 className="text-[28px] leading-[40px] font-[700] md:leading-[67.2px] md:text-[48px]">
              <span className="flex">星盘跨境, 品牌出海商家的</span>
              <span className="flex mb-[8px] md:mb-[28px]">
                一站式数智化<span className="text-[#FE8953]">解决方案</span>
              </span>
            </h1>
            <div className="flex items-center md:hidden">
              <Image
                width={748}
                height={582}
                quality={75}
                src="https://media.cdn.ishopastro.com/upload/images/20221219.png_2022-12-19-12-02-37.png"
                alt="banner1"
              />
            </div>
            {!isMobile && (
              <div className="mt-[20px] mb-[24px]">
                {[
                  '十五分钟快速建站, 搭建更具本土化的品牌独立站',
                  '最优建站产品组合, 丰富的免费插件, 紧贴您的行业需求',
                  '精准助力广告营销, 深度挖掘市场情报, 量化驱动私域增长',
                  ' 多种生意场景套件, 行业专家全案运营'
                ].map((el, i) => {
                  return (
                    <div
                      key={el}
                      className={`flex items-center mb-[4px] text-[16px] leading-[28px] md:mb-[6px] md:text-[18px] md:leading-[32px]`}
                    >
                      <span className="flex w-[8px] h-[8px] mr-[6px] rounded-[4px] bg-white" />
                      <span style={{ marginRight: i === 1 ? '16px' : '0' }}>{el}</span>
                    </div>
                  )
                })}
              </div>
            )}
            {isMobile && (
              <div className="flex flex-wrap justify-between mt-[20px] mb-[24px]">
                {['十五分钟快速建站', '丰富的免费插件', '精准助力广告营销', '行业专家全案运营'].map((el, i) => {
                  return (
                    <div
                      key={el}
                      style={
                        {
                          // justifyContent: i % 2 === 1 ? 'flex-end' : 'flex-start'
                        }
                      }
                      className={`flex items-center mb-[4px] w-[50%] text-[16px] leading-[28px] md:mb-[6px] md:text-[18px] md:leading-[32px]`}
                    >
                      <span className="flex w-[8px] h-[8px] mr-[6px] rounded-[4px] bg-white" />
                      <span style={{ marginRight: i === 1 ? '16px' : '' }}>{el}</span>
                    </div>
                  )
                })}
              </div>
            )}

            <div className="md:hidden flex flex-col">
              <Input
                onChange={(v) => {
                  handleInputNumber(v)
                }}
                onBlur={(v) => {
                  const values = v.target.value
                  const isRightPhone = Boolean(/^(1|2)(3|4|5|6|7|8|9)\d{9}$/g.test(values))
                  setShowError(!isRightPhone)
                }}
                value={phone}
                type="number"
                maxLength={11}
                style={{ '--placeholder-color': '#D5D5D5', background: '#fff' }}
                className="w-[100%] font-[12px] px-[15px] h-[38px] rounded-[6px] border-[1px] border-[#BFBFBF]"
                placeholder="输入您的手机号立即体验"
              />
              {showError && (
                <div className="text-[#FF0000] text-[12px] mt-[12px]">
                  {phone ? '请输入正确的11位手机号' : '手机号不能为空'}
                </div>
              )}
            </div>

            <Link passHref href={trailLink()}>
              <div
                onClick={() => {
                  if (isMobile) {
                    if (!phone) {
                      setShowError(true)
                    }
                  }
                }}
                className="w-[100%] md:hidden mt-[12px] mb-[40px] flex item-center cursor-pointer text-[#fff]"
              >
                <span className="flex-1 py-[9px] md:py-[14px] text-[16px] md:text-[20px] leading-[26px] text-[#FFF] font-[700] text-center bg-[#FE8953] rounded-[8px]">
                  免费试用
                </span>
              </div>
            </Link>
            <div className="hidden text-[18px] leading-[26px] md:flex">
              <Link href={freeLink('', '')} passHref>
                <span className="py-[12px] px-[54px] text-[#fff] border border-solid border-[#FE8953] rounded-[8px] bg-[#FE8953]">
                  免费试用
                </span>
              </Link>
            </div>
          </div>
          <div className="hidden items-center md:flex">
            <Image
              width={676}
              height={539}
              quality={100}
              src="https://media.cdn.ishopastro.com/upload/images/20221212-151737.png_2022-12-12-07-35-32.png"
              alt="banner"
            />
          </div>
        </div>

        <div className="flex flex-wrap relative z-10 md:w-[1200px]">
          <div className="flex flex-col relative w-1/2 mb-[32px] text-center md:w-1/5 ">
            <div className="flex justify-center text-[36px] leading-[45px]">
              <span className="mr-[4px]">15</span>
              <div className="flex items-start">
                <span className="text-[14px] leading-[26px] text-[#F5F6FA] text-opacity-[.66]">分钟</span>
              </div>
            </div>
            <div className="text-[16px] leading-[20px] text-white text-opacity-80">建站完成</div>
            <span className="absolute right-0 bottom-0 w-[1px] h-[48px] bg-white opacity-50" />
          </div>

          <div className="flex flex-col relative w-1/2 mb-[32px] text-center md:w-1/5 ">
            <div className="text-[36px] leading-[45px]">
              <span className="mr-[4px]">20</span>
              <span>+</span>
            </div>
            <div className="text-[16px] leading-[20px] text-white text-opacity-80">主流语言支持</div>
            <span className="hidden absolute right-0 bottom-0 w-[1px] h-[48px] bg-white opacity-50 md:block" />
          </div>

          <div className="flex flex-col relative w-1/2 mb-[32px] text-center md:w-1/5 ">
            <div className="text-[36px] leading-[45px]">
              <span className="mr-[4px]">80</span>
              <span>+</span>
            </div>
            <div className="text-[16px] leading-[20px] text-white text-opacity-80">本地币种支持</div>
            <span className="absolute right-0 bottom-0 w-[1px] h-[48px] bg-white opacity-50" />
          </div>

          <div className="flex flex-col relative w-1/2 mb-[32px] text-center md:w-1/5 ">
            <div className="text-[36px] leading-[45px]">
              <span className="mr-[4px]">10</span>
              <span>+</span>
            </div>
            <div className="text-[16px] leading-[20px] text-white text-opacity-80">主流促销工具</div>
            <span className="hidden absolute right-0 bottom-0 w-[1px] h-[48px] bg-white opacity-50 md:block" />
          </div>

          <div className="flex flex-col relative w-1/2 mb-[32px] text-center md:w-1/5 ">
            <div className="flex justify-center text-[36px] leading-[45px]">
              <span className="mr-[4px]">2</span>
              <div className="flex items-start">
                <span className="text-[14px] leading-[26px] text-[#F5F6FA] text-opacity-[.66]">亿</span>
              </div>
            </div>
            <div className="text-[16px] leading-[20px] text-white text-opacity-80">全球企业信息库</div>
            <span className="absolute right-0 bottom-0 w-[1px] h-[48px] bg-white opacity-50 md:hidden" />
          </div>

          <div className="flex flex-col relative w-1/2 mb-[32px] text-center md:w-1/5 ">
            <div className="flex justify-center text-[36px] leading-[45px]">
              <span className="mr-[4px]">100</span>
              <div className="flex items-start mr-[4px]">
                <span className="text-[14px] leading-[26px] text-[#F5F6FA] text-opacity-[.66]">万</span>
              </div>
              <span>+</span>
            </div>
            <div className="text-[16px] leading-[20px] text-white text-opacity-80">海外消费者</div>
            <span className="hidden absolute right-0 bottom-0 w-[1px] h-[48px] bg-white opacity-50 md:block" />
          </div>

          <div className="flex flex-col relative w-1/2 mb-[32px] text-center md:w-1/5 ">
            <div className="flex justify-center text-[36px] leading-[45px]">
              <span className="mr-[4px]">300</span>
              <div className="flex items-start mr-[4px]">
                <span className="text-[14px] leading-[26px] text-[#F5F6FA] text-opacity-[.66]">万</span>
              </div>
              <span>+</span>
            </div>
            <div className="text-[16px] leading-[20px] text-white text-opacity-80">电商站点情报数据</div>
            <span className="absolute right-0 bottom-0 w-[1px] h-[48px] bg-white opacity-50" />
          </div>

          <div className="flex flex-col relative w-1/2 mb-[32px] text-center md:w-1/5 ">
            <div className="flex justify-center text-[36px] leading-[45px]">
              <span className="mr-[4px]">1</span>
              <div className="flex items-start mr-[4px]">
                <span className="text-[14px] leading-[26px] text-[#F5F6FA] text-opacity-[.66]">亿</span>
              </div>
              <span>+</span>
            </div>
            <div className="flex flex-col text-[16px] leading-[20px] text-white text-opacity-80">
              <span>商品GMC同步,</span>
              <span>成功率{'>99%'}</span>
            </div>
            <span className="hidden absolute right-0 bottom-0 w-[1px] h-[48px] bg-white opacity-50 md:block" />
          </div>

          <div className="flex flex-col relative w-1/2 mb-[32px] text-center md:w-1/5 ">
            <div className="flex justify-center text-[36px] leading-[45px]">
              <span className="mr-[4px]">100</span>
              <div className="flex items-start mr-[4px]">
                <span className="text-[14px] leading-[26px] text-[#F5F6FA] text-opacity-[.66]">万</span>
              </div>
              <span>+</span>
            </div>
            <div className="text-[16px] leading-[20px] text-white text-opacity-80">网红信息</div>
            <span className="absolute right-0 bottom-0 w-[1px] h-[48px] bg-white opacity-50" />
          </div>

          <div className="flex flex-col relative w-1/2 mb-[32px] text-center md:w-1/5 ">
            <div className="flex justify-center text-[36px] leading-[45px]">
              <span className="mr-[4px]">100</span>
              <div className="flex items-start mr-[4px]">
                <span className="text-[14px] leading-[26px] text-[#F5F6FA] text-opacity-[.66]">万</span>
              </div>
              <span>+</span>
            </div>
            <div className="flex flex-col text-[16px] leading-[20px] text-white text-opacity-80">
              <span>Meta平台广告素材</span>
              <span>持续更新</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
