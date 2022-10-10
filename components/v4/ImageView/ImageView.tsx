import { useRef, useState } from 'react'
import styles from './index.module.scss'

export default function ImageView(props: { src: string; children?: any }) {
  const { src } = props
  const [style, setStyle] = useState({})

  const setCoord = (e: any) => {
    setStyle({ left: e.clientX, top: e.clientY + 8, display: 'block' })
  }

  const onMouseLeave = () => {
    setStyle({ display: 'none' })
  }

  return (
    <div className={styles.imageView}>
      <div onMouseEnter={setCoord} onMouseMove={setCoord} onMouseLeave={onMouseLeave}>
        {props.children}
      </div>
      <div className={styles.imgBox} style={style}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="imageView" />
      </div>
    </div>
  )
}
