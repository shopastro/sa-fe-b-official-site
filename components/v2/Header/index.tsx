import Head from 'next/head'
import Script from 'next/script'
import React, { useEffect, useState } from 'react'

type IProps = {
  description?: string
  keywords?: string
}

declare global {
  interface Window {
    dataLayer: any
  }
}

const Header: React.FC<IProps> = (props) => {
  const {
    description = 'shopastro，星盘跨境，星盘旗下一站式跨境电商SaaS服务平台，为跨境卖家从获客、建站、投放、下单、物流、支付提供一站式解决方案，并有专业的服务团队及服务资源，一对一量身提供专业运营服务，是跨境卖家出海路上最值得信赖的伙伴！--shopastro星盘跨境',
    keywords = '独立站,星盘跨境,自建站,出海,跨境,DTC,电商,SaaS,跨境物流,跨境支付,Facebook投放,跨境引流,ShopAstro,免费SEO检测'
  } = props
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="//sys.cdn.myshopastro.com/fe/official-site/0.0.7/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FFF" />
        <meta name="facebook-domain-verification" content="rmikn52rejhxpepoxtp5q07p7wisp6" />
        <title>shopastro 星盘跨境 一站式跨境电商saas服务平台，跨境卖家的出海首选！</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="google-site-verification" content="7ThrbtOx2-qkncHO3SxtyWaqIWYB7NAU8xgV3Av6bzc" />
        {props.children}
      </Head>

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-6WMHV7EMED" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://tagging.ishopastro.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TLZJ6RL')
        `}
      </Script>

      <Script id="uDesk-analytics" strategy="afterInteractive">
        {`(function(a,h,c,b,f,g){a["UdeskApiObject"]=f;a[f]=a[f]||function(){(a[f].d=a[f].d||[]).push(arguments)};g=h.createElement(c);g.async=1;g.charset="utf-8";g.src=b;c=h.getElementsByTagName(c)[0];c.parentNode.insertBefore(g,c)})(window,document,"script","https://assets-cli.s4.udesk.cn/im_client/js/udeskApi.js","ud");
            ud({
                "code": "1b7f137j",
                "link": "https://1381583.s4.udesk.cn/im_client/?web_plugin_id=34130",
                "targetSelector": "#pendantItem",
            });
        `}
      </Script>
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
