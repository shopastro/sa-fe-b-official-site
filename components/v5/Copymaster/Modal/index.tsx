import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import RcModal from 'react-modal'

import useTrailLink from '../../../../hooks/useTrail'
import styles from './index.module.scss'

const invite = require('../../../../public/img/copymaster/invite.png')

type IProps = {
  isMobile: boolean
}

const Modal: React.FC<IProps> = (props: IProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const appElement = useRef<any>()
  const { isMobile } = props
  const freeLink = useTrailLink()

  const link = isMobile ? `/user/register` : freeLink('beluga_copymaster', 'beluga')

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }
  }, [isOpen])

  useEffect(() => {
    if (document.body) appElement.current = document.body
  }, [])

  useEffect(() => {
    if (location.search.includes('code')) setIsOpen(true)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    document.body.style.overflow = 'unset'
  }

  return (
    <RcModal appElement={appElement.current} isOpen={isOpen} overlayClassName={styles.overlay} className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalForm}>
          <div className="md:pt-[32px] pt-[24px] md:px-[91px] px-[72px]">
            <Image src={invite} height={isMobile ? 172 : 188} width={isMobile ? 200 : 218} alt="" />
          </div>
          <div className="flex items-center flex-col font-[600] text-[16px] text-[#222] mt-[12px]">
            <p className="mb-[6px]">
              赠送您 <span className="text-[24px] text-[#004ED1] font-[400]">3</span> 天付费版体验权益
            </p>
            <p>注册即可获取，畅享AI文案十倍提效</p>
          </div>
          <div className="w-[100%] mt-[32px]">
            <Link href={link} passHref>
              <div className="rounded-[4px] md:cursor-pointer flex items-center justify-center text-[14px] text-[#fff] h-[32px] w-[100%] bg-[#004ED1]">
                立即体验
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[100%] flex justify-center mt-[12px]">
        <div
          onClick={handleClose}
          className="align-[center] h-[32px] w-[32px] rounded-[16px] border-[1px] border-[#fff] border-solid flex justify-center cursor-pointer"
        >
          <Image src={'https://media.cdn.ishopastro.com/svg/sa-fe-b-icon/c_close.svg'} height={20} width={20} alt="" />
        </div>
      </div>
    </RcModal>
  )
}

export default Modal
