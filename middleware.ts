import { NextResponse } from 'next/server'
import type { NextFetchEvent, NextRequest } from 'next/server'

const BFF_URL = process.env.bff_url
const isBeta = process.env.APP_ENV === 'dev'
const domain = isBeta ? 'zhang90.beta.ishopastro.com' : 'astrobeluga.ishopastro.com'

export async function middleware(request: NextRequest, event: NextFetchEvent) {
  const saCid = request.cookies.get('sa-cid')

  const response = NextResponse.next()
  if (!saCid) {
    try {
      const res = await fetch(`${BFF_URL}/customers/cookie/v2?_domain=${domain}`, {
        method: 'GET'
      })
      const { data } = await res.json()
      response.cookies.set('sa-cid', data, { expires: new Date(Date.now() + 1000 * 3600 * 24 * 365 * 10) })
    } catch (err) {
      console.log(err)
    }
  }

  return response
}
