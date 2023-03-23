import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

const isBeta = process.env.APP_ENV === 'dev'
const chatSdkSrc = isBeta
  ? '//sys.cdn.ishopastro.com/pages/beta/sa-c-chat-sdk.js'
  : '//sys.cdn.ishopastro.com/lib/sa-chat-sdk.js'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `!(function(c,b,d,a){c[a]||(c[a]={});c[a].config={pid:"fagt864e6o@f960a628a01a912",appType:"web",imgUrl:"https://arms-retcode.aliyuncs.com/r.png?",sendResource:true,enableLinkTrace:true,behavior:true,enableSPA:true,useFmp:true,environment:document.domain.indexOf('beta.ishopastro.com')>=0?'daily':document.domain.indexOf('localhost')>=0?'local':'prod'};with(b)with(body)with(insertBefore(createElement("script"),firstChild))setAttribute("crossorigin","",src=d)})(window,document,"https://retcode.alicdn.com/retcode/bl.js","__bl");`
          }}
        ></script>
        <script dangerouslySetInnerHTML={{ __html: `window.gloConfig=${JSON.stringify({ isBeta })}` }}></script>
        <Script src={chatSdkSrc} strategy="lazyOnload" />
        <link rel="prefetch" href="https://sys.cdn.ishopastro.com/fe/common/lib.min@1.0.0.js" as="script" />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
