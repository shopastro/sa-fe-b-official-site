import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.scss'
import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'
import type { CarouselProps, SlideDirection } from './type'
import { slideInit, scroll } from './init'

const Carousel: React.FC<CarouselProps> = (props) => {
  const { slide = { ...slideInit }, pageList = [], slidePrevBtn, slideNextBtn, dot, className } = props
  const [currentPageX, setCurrentPageX] = useState(0)
  BScroll.use(Slide)
  const wrapRef = useRef<any>()
  const bScroll = useRef<any>()

  useEffect(() => {
    bScroll.current = new BScroll(wrapRef.current, {
      ...scroll,
      slide: {
        ...slideInit,
        ...slide,
      },
    }).on('scrollEnd', () => {
      const { pageX = 0 } = bScroll.current.getCurrentPage()
      setCurrentPageX(pageX)
    })
  }, [])

  useEffect(() => {
    bScroll.current?.refresh()
  }, [pageList.length])

  // 中间”点“点击时间
  const handleDot = (pageIndex: number) => {
    bScroll.current.goToPage(pageIndex, 0)
    setCurrentPageX(pageIndex)
  }

  // 生长中间的”点“
  const getListDot = () => {
    return pageList.map((it, index) => (
      <span
        key={index}
        className={`${styles.dot} ${currentPageX === index && styles.active}`}
        onClick={() => handleDot(index)}
      >
        {dot}
      </span>
    ))
  }

  // 左右两侧按钮点击
  const handleSlide = (type: SlideDirection) => {
    if (type === 'next') {
      bScroll.current.next()
      return
    }
    bScroll.current.prev()
  }

  // 当不需要循环时， 判断左右两侧按钮状态
  const unLoopSlideBtnStatus = (type: SlideDirection) => {
    const { loop } = slide
    if (loop) return true

    if ((type === 'prev' && currentPageX === 0) || (type == 'next' && currentPageX === pageList.length - 1)) {
      return false
    }
    return true
  }

  return (
    <div className={`${className}   ${styles.mouseWheelHorizontalSlide}`}>
      <div className={styles.slideContainer}>
        <div
          className={`${styles.slideBtn} ${styles.prevBtn} ${!unLoopSlideBtnStatus('prev') && styles.disabled}`}
          onClick={() => handleSlide('prev')}
        >
          {slidePrevBtn}
        </div>
        <div className={styles.slideWrapper} ref={wrapRef}>
          <div className={styles.slideContent}>
            {pageList.map((it, idx) => {
              return (
                <div key={idx} className={styles.slidePage}>
                  {it}
                </div>
              )
            })}
          </div>
        </div>
        <div
          className={`${styles.slideBtn} ${styles.nextBtn} ${!unLoopSlideBtnStatus('next') && styles.disabled}`}
          onClick={() => handleSlide('next')}
        >
          {slideNextBtn}
        </div>
        <div className={styles.dotsWrapper}>{getListDot()}</div>
      </div>
    </div>
  )
}

export default Carousel
