import { NextResponse } from 'next/server'
import type { NextFetchEvent, NextRequest } from 'next/server'

const isBeta = process.env.APP_ENV === 'dev'
const domain = isBeta ? 'zhang90.beta.ishopastro.com' : 'astrobeluga.ishopastro.com'
const WEBHOOK_URL = `https://webhook.${isBeta ? 'beta.' : ''}ishopastro.com`

export async function middleware(request: NextRequest, event: NextFetchEvent) {
  const saCid = request.cookies.get('sa-cid')
  const { pathname } = request.nextUrl

  if (pathname === '/api/im-gateway/chat/initConnect.json') {
    request.nextUrl.searchParams.set('_domain', domain)
    request.nextUrl.pathname = '/api/beluga-chat/im/v1/customer/connect.json'
    return NextResponse.rewrite(request.nextUrl)
  }

  if (pathname === '/im/v1/customer/notification/subscription.json') {
    request.nextUrl.searchParams.set('_domain', domain)
    request.nextUrl.pathname = '/api/beluga-chat/im/v1/customer/notification/subscription.json'
    return NextResponse.rewrite(request.nextUrl)
  }

  const response = NextResponse.next()
  if (!saCid) {
    try {
      const res = await fetch(`${WEBHOOK_URL}/customers/cookie/v2?_domain=${domain}`, {
        method: 'GET'
      })
      const { data } = await res.json()
      response.cookies.set('sa-cid', data, {
        expires: new Date(Date.now() + 1000 * 3600 * 24 * 365 * 10),
        domain: isBeta ? '.ishopastro.com' : '.shopastro.com'
      })
    } catch (err) {
      console.log(err)
    }
  }

  return response
}
