import Image from 'next/image'
import { useState } from 'react'

type IProps = {
  isMobile: boolean
}

const Video = (props: IProps) => {
  const { isMobile } = props
  const [playBtn, setPlayBtn] = useState(true)
  return (
    <div
      className="w-[100%] h-[220px] md:h-[640px] md:px-[80px] md:py-[40px] flex justify-center relative"
      style={{
        backgroundColor: '#FBFDFF',
        width: '100% !important'
      }}
    >
      {!isMobile && (
        <div
          onClick={() => {
            setPlayBtn(false)
            document.querySelector('video')?.play()
          }}
          style={{ zIndex: 2, display: playBtn ? 'block' : 'none' }}
          id="play"
          className="absolute top-[50%] left-[50%] md:bottom-[-32px] md:right-[-32px] bottom-[-16px] right-[-16px] cursor-pointer md:w-[64px] md:h-[64px] w-[32px] h-[32px]"
        >
          <Image
            width={64}
            height={64}
            quality={100}
            src="https://media.cdn.ishopastro.com/svg/sa-fe-b-icon/video_play.svg"
            alt="banner bg"
          />
        </div>
      )}

      <video
        className="md:max-w-[988px] w-[100%] h-[100%] md:h-[100%] bt-[0]"
        controls
        preload="metadata"
        poster={isMobile ? 'https://media.cdn.ishopastro.com/svg/sa-fe-b-background/mobile_cover.svg' : ''}
      >
        <source
          src="https://prod-ishopastro-com.oss-accelerate-overseas.aliyuncs.com/videos/copymaster.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  )
}

export default Video
