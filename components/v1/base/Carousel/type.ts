export type CarouselProps = {
  slide?: {
    // 是否循环
    loop: boolean
    threshold: 100
    // 自动播放
    autoplay: boolean
    // 自动播放时间
    interval: number
  }
  pageList: any[]
  slidePrevBtn?: any
  slideNextBtn?: any
  dot?: any
  className?: string
}

export type SlideDirection = 'prev' | 'next'
export type UnLoopSlideBtnStatus = 'enabled' | 'disabled'
