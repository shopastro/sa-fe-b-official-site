import Image from 'next/image'

import { questions } from './data'

const BelugaQuestion = () => {
  return (
    <div className="flex justify-center w-screen">
      <div className="flex flex-col items-center relative pb-[40px] overflow-hidden">
        <div className="mb-[20px] text-[28px] leading-[34px] text-[#0E1E46] font-[700] md:mb-[40px] md:text-[32px] md:leading-[38px]">
          常见问题
        </div>
        <div className="flex flex-col px-[20px] md:flex-row md:flex-wrap md:justify-between md:max-w-[1200px] md:px-0">
          {questions.map(({ q, a }, index) => {
            return (
              <div key={index} className="flex mb-[12px] last:mb-0 md:max-w-[570px] md:mb-[32px] md:last:mb-[32px]">
                <div className="flex p-[12px] border border-[#DDE0F1] rounded-[12px] md:p-[24px]">
                  <div className="flex-shrink-0 w-[24px] h-[24px] mr-[14px]">
                    <Image
                      src="https://media.cdn.ishopastro.com/svg/shopastrohome/12151393a75c4453f646467312e92978.svg"
                      width={24}
                      height={24}
                      quality={100}
                      alt="icon"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-[14px] leading-[18px] mb-[10px] md:mb-[12px] md:text-[16px] md:leading-[26px]">
                      {q}
                    </div>
                    <div className="text-[13px] leading-[20px] text-[#525B76] line-clamp-3">{a}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default BelugaQuestion
