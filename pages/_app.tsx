import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'

import '../components/biz/Message/message.min.css'
import DetectionStore from '../store/detectionStore'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
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
