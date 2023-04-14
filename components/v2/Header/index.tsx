import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
import React, { useEffect } from 'react'

type IProps = {
  title?: string
  description?: string
  keywords?: string
}

declare global {
  interface Window {
    dataLayer: any
    _isInitTracker: boolean
  }
}

const Header: React.FC<IProps> = (props) => {
  const {
    title = 'shopastro 星盘跨境 一站式跨境电商SaaS服务平台，跨境卖家的出海首选！',
    description = 'shopastro，星盘跨境，星盘旗下一站式跨境电商SaaS服务平台，为跨境卖家从获客、建站、投放、下单、物流、支付提供一站式解决方案，并有专业的服务团队及服务资源，一对一量身提供专业运营服务，是跨境卖家出海路上最值得信赖的伙伴！--shopastro星盘跨境',
    keywords = '独立站,星盘跨境,自建站,出海,跨境,DTC,电商,SaaS,跨境物流,跨境支付,Facebook投放,跨境引流,ShopAstro,免费SEO检测'
  } = props

  const { route } = useRouter()
  const canonical = `https://www.ishopastro.com${route}`

  const initTracker = () => {
    if (window._isInitTracker) {
      return
    }
    window._isInitTracker = true
    const GTAG_ID = 'G-6WMHV7EMED'
    const gtagScript = document.createElement('script')
    gtagScript.type = 'text/javascript'
    gtagScript.id = 'gtag-script'
    gtagScript.async = true
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`
    gtagScript.onload = () => {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ event: 'gtm.js', 'gtm.start': new Date().getTime(), 'gtm.uniqueEventId': 0 })
      const gtmScript = document.createElement('script')
      gtmScript.type = 'text/javascript'
      gtmScript.id = 'gtm-script'
      gtmScript.text = `
         (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://tagging.ishopastro.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TLZJ6RL')
        `
      document.head.appendChild(gtmScript)
    }

    document.head.appendChild(gtagScript)
  }

  useEffect(() => {
    document.addEventListener('scroll', initTracker)
    document.addEventListener('mousemove', initTracker)
    document.addEventListener('touchstart', initTracker)
    return () => {
      document.removeEventListener('scroll', initTracker)
      document.removeEventListener('mousemove', initTracker)
      document.removeEventListener('touchstart', initTracker)
    }
  }, [])

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="//sys.cdn.myshopastro.com/fe/official-site/0.0.7/favicon.ico" />
        <link rel="canonical" href={canonical} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FFF" />
        <meta name="facebook-domain-verification" content="rmikn52rejhxpepoxtp5q07p7wisp6" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="google-site-verification" content="7ThrbtOx2-qkncHO3SxtyWaqIWYB7NAU8xgV3Av6bzc" />
        {props.children}
      </Head>
      {/*暂时下线打点, beta环境评估性能*/}
      {/*<Script src="https://www.googletagmanager.com/gtag/js?id=G-6WMHV7EMED" strategy="afterInteractive" />*/}
      {/*<Script id="google-analytics" strategy="afterInteractive">*/}
      {/*  {`*/}
      {/*    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':*/}
      {/*      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],*/}
      {/*      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=*/}
      {/*      'https://tagging.ishopastro.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);*/}
      {/*      })(window,document,'script','dataLayer','GTM-TLZJ6RL')*/}
      {/*  `}*/}
      {/*</Script>*/}
      <Script strategy="afterInteractive" src={'https://hm.baidu.com/hm.js?9f6bc03de81e40fdaefb5edea1c99cd1'} />

      <noscript>
        <iframe
          src="https://tagging.ishopastro.com/ns.html?id=GTM-TLZJ6RL"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
    </>
  )
}

export default Header
