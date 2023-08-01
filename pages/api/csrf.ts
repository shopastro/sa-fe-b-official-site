import axios from 'axios'
import { setCookie as setCookieNext } from 'cookies-next'
import { NextApiRequest, NextApiResponse } from 'next'
import setCookieParser from 'set-cookie-parser'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(200).json({ success: false })
    return
  }
  try {
    const isBeta = process.env.APP_ENV === 'dev'
    let api = 'https://sys.api.ishopastro.com/common/v1/index.json'
    if (isBeta) {
      api = 'https://sys.api.beta.ishopastro.com/common/v1/index.json'
    }
    const bffResponse = await axios.get(api)
    //@ts-ignore
    const bffSetCookie = setCookieParser.parse(bffResponse as Response)
    bffSetCookie.forEach((cookie) => {
      setCookieNext(cookie.name, cookie.value, {
        req,
        res,
        domain: '.shopastro.com',
        httpOnly: undefined,
        path: cookie.path,
        expires: cookie.expires,
        maxAge: cookie.maxAge,
        encode: (value) => {
          return value
        }
      })
    })
    res.status(200).json({ success: true })
  } catch {
    res.status(200).json({ success: false })
  }
}
