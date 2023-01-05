import axios from 'axios'

const prodUrl = '//sys.api.ishopastro.com/shop/v1/partner/create.json'
const betaUrl = '//sys.api.beta.ishopastro.com/shop/v1/partner/create.json'

export const axiosFun = (data = {}, callback: (p: any) => void) => {
  const url = /beta/.test(location.host) ? betaUrl : prodUrl

  return axios
    .post(url, data)
    .then((response) => {
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}
