import React from 'react'
import Title from '../base/Title'
import styles from './index.module.scss'

type IProps = {}

const Partner: React.FC<IProps> = (props) => {
  const partners = [
    'google',
    'tt',
    'strip',
    'paypal',
    'lianlian',
    'opay',
    'fourPx',
    'joying',
    'meetsocial',
    'cheetah',
    'blue',
  ]
  return (
    <div className={styles.partnerBox}>
      <Title text="合作伙伴" size={34} mbSize={15} />

      <div className={styles.partnerList}>
        {partners.map((it, idx) => (
          <div key={`${it}${idx}`} className={`${styles.partner} ${styles[it]}`} />
        ))}
      </div>
    </div>
  )
}

export default Partner
