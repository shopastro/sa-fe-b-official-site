import Link from 'next/link'

const TryNow = () => {
  return (
    <div className="flex flex-col items-center w-screen bg-[#F5F6FA]">
      <div className="flex flex-col items-center relative px-[20px] py-[40px] overflow-hidden md:py-[80px]">
        <div className="mb-[10px] text-[24px] leading-[28px] text-[#0E1E46] font-[700] md:mb-[20px] md:text-[32px] md:leading-[38px]">
          抢先体验? 立即开启免费试用
        </div>
        <div className="mb-[10px] text-[18px] leading-[28px] text-[#535D77] md:mb-[20px]">
          光看不够? 立即开始免费7天试用。
        </div>
        <Link href="/product" passHref>
          <div className="flex cursor-pointer">
            <span className="px-[52px] py-[12px] text-[16px] leading-[24px] text-[#004DD1] font-[600] border border-[#004DD1] rounded-[12px] md:py-[18px]">
              免费试用
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default TryNow
