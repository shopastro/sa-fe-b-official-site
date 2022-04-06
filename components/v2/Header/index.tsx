import React, { useEffect } from 'react'
import Head from 'next/head'

type IProps = {}

const Header: React.FC<IProps> = (props) => {
  const sp = (w: Record<string, any>, d: Document, s: string, l: string, i: string) => {
    w[l] = w[l] || []
    w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })

    let f: any = d.getElementsByTagName(s)[0],
      j: any = d.createElement(s),
      dl = l !== 'dataLayer' ? '&l=' + l : ''
    j.async = true
    j.src = 'https://tagging.ishopastro.com/gtm.js?id=' + i + dl
    f.parentNode.insertBefore(j, f)
  }
  useEffect(() => {
    sp(window, document, 'script', 'dataLayer', 'GTM-TLZJ6RL')
  })
  return (
    <Head>
      <noscript>
        <iframe
          src="https://tagging.ishopastro.com/ns.html?id=GTM-TLZJ6RL"
          height="0"
          width="0"
          style={{
            display: 'none',
            visibility: 'hidden',
          }}
        ></iframe>
      </noscript>
      {props.children}
    </Head>
  )
}

export default Header
