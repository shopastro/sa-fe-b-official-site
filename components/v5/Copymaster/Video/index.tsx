import Image from 'next/image'

type IProps = {
  isMobile: boolean
}

const Video = (props: IProps) => {
  const { isMobile } = props
  // controls
  return (
    <div
      className="w-[100%] h-[320px] md:h-[640px] md:px-[80px] md:py-[40px] relative"
      style={{
        backgroundColor: '#FBFDFF',
        width: '100% !important',
        height: '200px'
      }}
    >
      {/* <div className="absolute top-[50%] left-[50%] md:bottom-[-32px] md:right-[-32px] cursor-pointer w-[64px] h-[64px]">
        <Image
          width={64}
          height={64}
          quality={100}
          src="https://media.cdn.ishopastro.com/svg/sa-fe-b-icon/video_play.svg"
          alt="banner bg"
        />
      </div> */}

      <video
        className="w-[100%] h-[100%] md:h-[100%]"
        controls
        preload="metadata"
        src="https://prod-ishopastro-com.oss-accelerate-overseas.aliyuncs.com/videos/copymaster.mp4"
      />
    </div>
  )
}

export default Video
