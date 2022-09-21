import '../styles/globals.css'
import '../components/biz/Message/message.min.css'
import type { AppProps } from 'next/app'
import DetectionStore from '../store/detectionStore'

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
