import React from 'react'
import styles from './index.module.scss'
import Title from '../Title'

type IProps = {
  text: string
  mainTitle: string[]
  layout?: 'left' | 'right'
  desc: string[]
  type: 'launch' | 'case' | 'service' | 'abroad' | 'site'
}

const CardLR: React.FC<IProps> = (props) => {
  const { text, mainTitle = [], layout = 'left', desc = [], type } = props
  return (
    <div className={`${styles.CardLR} ${styles[layout]} ${styles[type]}`}>
      <div className={`${styles.leftBox } ${styles[type]}`}>
        <Title text={text} size={24} color="blue"  mbSize={15}/>
        <div className={styles.mainTitle}>
          {mainTitle.map((it) => (
            <div key={it}>{it}</div>
          ))}
        </div>
        <div className={styles.desc}>
          {desc.map((it) => (
            <div key={it}>{it}</div>
          ))}
        </div>
      </div>
      <div className={`${styles.rightBox} ${styles[type]}`} />
    </div>
  )
}

export default CardLR
