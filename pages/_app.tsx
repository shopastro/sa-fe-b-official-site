import '../styles/globals.css'
import '../components/biz/Message/message.min.css'
import type { AppProps } from 'next/app'
import DetectionStore from '../store/detectionStore'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DetectionStore.Provider>
        <Component {...pageProps} />
      </DetectionStore.Provider>
    </>
  )
}

export default MyApp
