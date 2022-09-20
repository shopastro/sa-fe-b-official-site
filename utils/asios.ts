import axios from 'axios'
const url = '//sys.api.beta.ishopastro.com/shop/v1/partner/create.json'

export const axiosFun = (data = {}, callback: (p: any) => void) => {
  return axios
    .post(url, data)
    .then((response) => {
      callback(response)
    })
    .catch((error) => {
      callback(error)
    })
}
