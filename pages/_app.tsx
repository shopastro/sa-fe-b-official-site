import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import 'tailwindcss/tailwind.css'

import DetectionStore from '../store/detectionStore'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (location.href.includes('?')) {
      const searchToBase64 = Buffer.from(location.href).toString('base64')
      sessionStorage.setItem('refer', searchToBase64)
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
