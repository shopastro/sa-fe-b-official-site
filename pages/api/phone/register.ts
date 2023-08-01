import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }
  try {
    const { code } = req.query
    const bffCopyMasterCode = (code ?? '').toString()
    const isBeta = process.env.APP_ENV === 'dev'
    let api = `https://sys.api.ishopastro.com/common/v1/phone/register.json?code=${bffCopyMasterCode}`
    if (isBeta) {
      api = `https://sys.api.beta.ishopastro.com/common/v1/phone/register.json?code=${bffCopyMasterCode}`
    }

    const bffHeaders: HeadersInit = {}
    const keys = Object.keys(req.headers)
    for (let key of keys) {
      const value = req.headers[key]
      if (value) {
        bffHeaders[key] = value.toString()
      }
    }
    delete bffHeaders.host
    delete bffHeaders['content-length']
    delete bffHeaders['content-length']
    delete bffHeaders['origin']
    delete bffHeaders['connection']

    console.log(JSON.stringify(req.headers))
    const bffResponse = await fetch(api, {
      method: 'POST',
      // @ts-ignore
      headers: bffHeaders,
      body: JSON.stringify(req.body)
    })
    const data = await bffResponse.json()
    res.status(200).json(data)
  } catch (error) {
    console.log(error)
    res.status(200).json({ success: false })
  }
}
