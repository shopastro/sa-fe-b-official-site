import Image from 'next/image'

import useIsMobile from '../../../../hooks/useIsMobile'

const Concat = () => {
  const isMobile = useIsMobile()

  return (
    <div className="flex flex-col w-screen md:items-center">
      <div className="flex flex-col relative px-[20px] pb-[0] overflow-hidden md:w-[1200px] md:pb-[80px]">
        {!isMobile && (
          <div className="mb-[16px] text-[24px] leading-[28px] text-[#0E1E46] font-[600] md:mb-[32px] md:text-[32px] md:leading-[38px]">
            联系我们
          </div>
        )}
        <div className="flex flex-col md:flex-row">
          <div className="flex mb-[16px] md:mb-0 md:flex-6 md:mr-[64px]">
            <Image
              width={1343}
              height={928}
              quality={100}
              src="https://media.cdn.ishopastro.com/upload/images/20221230-170159.png_2022-12-30-09-02-45.png"
              alt="icon"
            />
          </div>
          <div className="flex flex-col md:flex-4 md:justify-end">
            <div className="flex mb-[16px] md:mb-[48px]">
              <Image
                width={833}
                height={555}
                quality={100}
                src="https://media.cdn.ishopastro.com/upload/images/4A29AD47-38E3-4C64-B34E-65202F55AAC0.png_2023-06-27-08-24-21.png"
                alt="icon"
              />
            </div>
            {!isMobile && (
              <>
                <div className="flex flex-col mb-[8px] text-[14px] leading-[22px] text-[#0E1E46] md:flex-row md:text-[16px] md:leading-[26px]">
                  <span className="mr-[8px]">总部地址: </span>
                  <span>浙江省杭州市滨江区施强广场1号楼1902室</span>
                </div>
                <div className="mb-[8px] text-[14px] leading-[22px] text-[#525B76] md:text-[16px] md:leading-[26px]">
                  contact@shopastro.com
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Concat
