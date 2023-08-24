import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import useIsMobile from '../../../hooks/useIsMobile'
import Pendant from '../../common/Pendant'

const add = 'https://media.cdn.ishopastro.com/svg/shopastrohome/7a7423a5d27fb477da06078dc3a6689a.svg'
const minus = 'https://media.cdn.ishopastro.com/svg/shopastrohome/f0c77881530c6ee43515438ef4d8265f.svg'

const Footer = () => {
  const [showAbout, setShowAbout] = useState(false)
  const [showJoin, setShowJoin] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    if (!isMobile) {
      setShowAbout(true)
      setShowJoin(true)
    }
  }, [isMobile])

  return (
    <div className="flex flex-col">
      <div className="flex flex-col pt-[24px] border-t md:items-center md:pt-0">
        <div className="flex flex-col md:flex-row md:w-[1200px] md:py-[58px]">
          <div className="flex flex-col px-[20px] mb-[24px] text-[14px] leading-[20px] text-[#535D77] md:flex-1">
            <span className="mb-[16px] text-[16px] text-[#0E1E46] font-[700] md:mb-[32px] md:text-[20px] md:leading-[30px]">
              联系我们
            </span>
            <span>星盘起航（杭州）网络技术有限公司</span>
            <span className="mb-[24px]">浙江省杭州市滨江区施强广场1号楼1902室</span>
            <span>contact@shopastro.com</span>
            <span>(+86) 190 1286 5235</span>
          </div>

          <div className="flex flex-col px-[20px] mb-[24px] text-[14px] leading-[20px] text-[#535D77] md:mr-[96px]">
            <span className="mb-[16px] text-[16px] text-[#0E1E46] font-[700] md:mb-[24px] md:text-[20px] md:leading-[30px]">
              公众号
            </span>
            <span className="w-[115px] h-[115px] mb-[4px] md:mb-[10px]">
              <Image
                src="https://media.cdn.ishopastro.com/upload/images/飞书20221214-161756.jpg_2022-12-14-08-18-16.jpg"
                width={228}
                height={230}
                alt="shopastro 官方公众号"
              />
            </span>
            <span>shopastro 官方公众号</span>
          </div>

          <div className="px-[20px] border-t md:mr-[96px] md:border-none">
            <div
              className="flex items-center justify-between py-[16px] text-[16px] leading-[24px] text-[#0E1E46] font-[700] md:py-0 md:mb-[24px] md:text-[20px] md:leading-[30px]"
              onClick={() => {
                if (isMobile) setShowAbout(!showAbout)
              }}
            >
              <span>关于我们</span>
              <span className="md:hidden">
                <Image src={showAbout ? minus : add} width={18} height={18} alt={showAbout ? 'minus' : 'add'} />
              </span>
            </div>
            <div
              className="flex flex-col text-[14px] leading-[24px] transition-all overflow-hidden"
              style={{ maxHeight: showAbout ? '100vh' : '0' }}
            >
              {[
                { name: '公司简介', url: '/about' },
                { name: '隐私政策', url: '/privacy' },
                { name: '用户协议', url: '/agreement' },
                { name: '解决方案', url: '/solutions' },
                { name: '帮助中心', url: 'https://shopastro.feishu.cn/wiki/wikcnLesUeY4fIzlf9MmebbYhxg' }
              ].map((el) => {
                return (
                  <Link href={el.url} key={el.name} passHref>
                    <div className="py-[16px] text-[16px] md:py-[0] md:mb-[8px]  text-[#535D77] cursor-pointer">
                      {el.name}
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="px-[20px] border-t md:border-none">
            <div
              className="flex items-center justify-between py-[16px] text-[16px] leading-[24px] text-[#0E1E46] font-[700] md:py-0 md:mb-[24px] md:text-[20px] md:leading-[30px]"
              onClick={() => {
                if (isMobile) setShowJoin(!showJoin)
              }}
            >
              <span>加入我们</span>
              <span className="md:hidden">
                <Image src={showJoin ? minus : add} width={18} height={18} alt={showAbout ? 'minus' : 'add'} />
              </span>
            </div>
            <div
              className="flex flex-col text-[14px] leading-[24px] transition-all overflow-hidden"
              style={{ maxHeight: showJoin ? '100vh' : '0' }}
            >
              {[
                {
                  name: '在招岗位',
                  url: 'https://www.zhipin.com/gongsir/0c4a441aa82110141nx82Nm9EFI~.html?ka=company-jobs'
                },
                { name: '投递简历', url: 'https://www.zhipin.com/gongsi/0c4a441aa82110141nx82Nm9EFI~.html' }
              ].map((el) => {
                return (
                  <Link href={el.url} key={el.name} passHref>
                    <div className="py-[16px] text-[#535D77] text-[16px] md:py-[0] md:mb-[8px] cursor-pointer">
                      {el.name}
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        <div className="px-[20px] py-[16px] text-[12px] leading-[20px] text-[#222] text-opacity-70 border-t md:w-screen md:py-[24px]">
          <div className="md:flex md:w-[1200px] md:m-auto">
            <span className="flex flex-1 mb-[8px]">©{new Date().getFullYear()} shopastro All Rights Reserved.</span>
            <div className="flex flex-wrap md:items-center">
              <a className="mr-[8px] text-[#263959]" href="http://beian.miit.gov.cn/" target="_blank" rel="noreferrer">
                浙ICP备2021036268号
              </a>
              <div className="flex items-center">
                <span className="w-[16px] h-[14px] mr-[8px]">
                  <Image
                    src="https://media.cdn.ishopastro.com/upload/images/police.png_2022-12-14-06-58-53.png"
                    width={16}
                    height={16}
                    alt="police png"
                  />
                </span>
                <a
                  className="mr-[8px]  text-[#263959]"
                  href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33011002016170"
                  target="_blank"
                  rel="noreferrer"
                >
                  浙公网安备 33011002016170号
                </a>
              </div>
              <div className="flex items-center">
                <span className="w-[16px] h-[14px] mr-[8px]">
                  <Image
                    src="https://media.cdn.ishopastro.com/upload/images/police.png_2022-12-14-06-58-53.png"
                    width={16}
                    height={16}
                    alt="police png"
                  />
                </span>
                <a
                  className="mr-[8px] text-[#263959]"
                  href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33011002016170"
                  target="_blank"
                  rel="noreferrer"
                >
                  浙公网安备 33011002016309号
                </a>
              </div>
              <div className="flex items-center">
                <span className="w-[16px] h-[14px] mr-[8px]">
                  <Image
                    src="https://media.cdn.ishopastro.com/upload/images/police.png_2022-12-14-06-58-53.png"
                    width={16}
                    height={16}
                    alt="police png"
                  />
                </span>
                <a
                  className="mr-[8px]  text-[#263959]"
                  href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33011002016170"
                  target="_blank"
                  rel="noreferrer"
                >
                  浙公网安备 33011002016308号
                </a>
              </div>
            </div>
          </div>
        </div>
        {!isMobile && <Pendant />}
      </div>
    </div>
  )
}

export default Footer
