import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import useTrailLink from '../../../../hooks/useTrail'

const invite = require('../../../../public/img/copymaster/invite.png')

type IProps = {
  isMobile: boolean
}

const InviteModal = (props: IProps) => {
  const { isMobile } = props
  const freeLink = useTrailLink()

  const link = isMobile ? `/user/register` : freeLink('beluga_copymaster', 'beluga')

  useEffect(() => {}, [])

  return (
    <div className="w-screen h-[100%] absolute top-0 left-0  z-[10]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div
        className="w-[screen]  md:w-[400px] fixed h-[354px] md:h-[384px] rounded-[8px]"
        style={{ top: 'calc(50% - 192px)', left: 'calc(50% - 200px)' }}
      >
        <div className="bg-[#fff] w-[100%] h-[354px] md:h-[384px] rounded-[8px]">
          <div
            className="w-[100%] md:h-[400px] h-[370px] rounded-[8px]"
            style={{
              background: 'linear-gradient(180deg, #E7ECF5 0%, rgba(243, 245, 250, 0) 54.17%)'
            }}
          >
            <div className="md:pt-[32px] pt-[24px] md:px-[91px] px-[72px]">
              <Image src={invite} height={isMobile ? 172 : 188} width={isMobile ? 200 : 218} alt="" />
            </div>
            <div className="flex items-center flex-col font-[600] text-[16px] text-[#222] mt-[12px]">
              <p className="mb-[6px]">
                赠送您 <span className="text-[24px] text-[#004ED1] font-[400]">3</span> 天付费版体验权益
              </p>
              <p>注册即可获取，畅享AI文案十倍提效</p>
            </div>
            <div className="w-[100%] px-[16px] mt-[32px]">
              <Link href={link} passHref>
                <div className="rounded-[4px] md:cursor-pointer flex items-center justify-center text-[14px] text-[#fff] h-[32px] w-[100%] bg-[#004ED1]">
                  立即体验
                </div>
              </Link>
            </div>
          </div>
          <div className="w-[100%] flex justify-center">
            <div className="align-[center] h-[32px] w-[32px] rounded-[16px] border-[1px] border-[#fff] border-solid flex justify-center cursor-pointer">
              <Image
                src={'https://media.cdn.ishopastro.com/svg/sa-fe-b-icon/c_close.svg'}
                height={20}
                width={20}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InviteModal
