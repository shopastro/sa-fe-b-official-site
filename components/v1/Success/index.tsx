import React from 'react'
import styles from './index.module.scss'
import Button from '../base/Button'

type IProps = {
  handleClose: () => void
}

const Success: React.FC<IProps> = (props) => {
  return (
    <div className={styles.successBox}>
      <div className={styles.icon}></div>
      <div className={styles.title}>您已提交成功</div>
      <div className={styles.desc}>shopastro服务团队将在24小时内联系您 请您留意来电或邮件信息。</div>
      <div className={styles.btn}>
        <Button text="确定" onClick={props.handleClose} type="successForm" />
      </div>
    </div>
  )
}

export default Success
