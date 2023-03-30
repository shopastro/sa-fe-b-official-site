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
        backgroundColor: '#FBFDFF'
      }}
    >
      {!isMobile && (
        <div
          className="absolute"
          style={{
            zIndex: 2,
            display: playBtn ? 'flex' : 'none',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '560px'
          }}
        >
          <div
            onClick={() => {
              setPlayBtn(false)
              document.querySelector('video')?.play()
            }}
            id="play"
            className="cursor-pointer md:w-[64px] md:h-[64px] w-[32px] h-[32px]"
          >
            <Image
              width={64}
              height={64}
              quality={100}
              src="https://media.cdn.ishopastro.com/svg/sa-fe-b-icon/video_play.svg"
              alt="banner bg"
            />
          </div>
        </div>
      )}

      <video
        className="md:max-w-[988px] w-[100%] h-[100%] md:h-[100%] bt-[0]"
        controls
        preload="metadata"
        style={{ objectFit: 'cover' }}
        poster={isMobile ? 'https://media.cdn.ishopastro.com/svg/sa-fe-b-background/copamaster_cover_mobile.svg' : ''}
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
