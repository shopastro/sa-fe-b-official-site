import type { AppProps } from 'next/app'
import queryString from 'query-string'
import { useEffect } from 'react'
import 'tailwindcss/tailwind.css'

import '../components/biz/Message/message.min.css'
import DetectionStore from '../store/detectionStore'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (location.href.includes('?')) {
      const searchToBase64 = Buffer.from(location.href).toString('base64')
      sessionStorage.setItem('refer', searchToBase64)
    }
  }, [])

  useEffect(() => {
    //url上的code
    const searchCode = queryString.parse(location.search).code ? String(queryString.parse(location.search).code) : ''
    //本地存储中的code
    const localStorageCode = localStorage.getItem('copymasterCode')
    if (searchCode) {
      localStorage.setItem('copymasterCode', searchCode)
      if (searchCode !== localStorageCode || !localStorage.getItem('codeExpireTime')) {
        localStorage.setItem('codeExpireTime', String(new Date().getTime()))
      }
    }
  }, [])

  useEffect(() => {
    //上次存储时间
    const codeExpireTime = Number(localStorage.getItem('codeExpireTime'))
    //当前时间
    const nowTime = new Date().getTime()

    if (nowTime - (codeExpireTime + 60 * 60 * 24 * 1000) > 0) {
      localStorage.removeItem('copymasterCode')
      localStorage.removeItem('codeExpireTime')
    }
  }, [])

  return (
    <>
      {/*@ts-ignore*/}
      <DetectionStore.Provider>
        {/*@ts-ignore*/}
        <Component {...pageProps} />
      </DetectionStore.Provider>
    </>
  )
}

export default MyApp
