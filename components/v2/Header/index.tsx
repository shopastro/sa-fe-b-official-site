import React, { useEffect } from 'react'
import Head from 'next/head'
import Script from 'next/script'

type IProps = {}

const Header: React.FC<IProps> = (props) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="//sys.cdn.myshopastro.com/fe/official-site/0.0.7/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>shopastro 星盘跨境 一站式跨境电商saas服务平台，跨境卖家的出海首选！</title>
        <meta
          name="description"
          content="ShopAstro，星盘跨境,星盘旗下一站式跨境电商Saas服务平台，为跨境卖家从获客、建站、投放、下单、物流、支付提供一站式解决方案，并有专业的服务团队及服务资源，一对一量身提供专业运营服务，是跨境卖家出海路上最值得信赖的伙伴！"
        />
        <meta
          name="keywords"
          content="独立站,星盘跨境,自建站,出海,跨境,DTC,电商,Saas,跨境物流,跨境支付,Facebook投放,跨境引流,ShopAstro"
        />
        <meta name="google-site-verification" content="7ThrbtOx2-qkncHO3SxtyWaqIWYB7NAU8xgV3Av6bzc" />
        {props.children}
      </Head>

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-6WMHV7EMED" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-6WMHV7EMED');
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
    </>
  )
}

export default Header
