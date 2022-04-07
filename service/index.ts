import axios from 'axios'

import { getCmsDomain }  from '../utils/domain'
 

export async function getTopics(): Promise<Record<string, string>[]> {
  return axios(getCmsDomain() + '/topics', {
    method: 'GET',
  })
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      return []
    })
}

export async function getTopic(body: string): Promise<Record<string, string>> {
  return axios(getCmsDomain() + `/topic/${body}`, {
    method: 'GET',
  })
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      return {}
    })
}
