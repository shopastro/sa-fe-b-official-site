import axios, { AxiosPromise } from 'axios'

import { getBelugaDomain, getCmsDomain } from '../utils/domain'
import { SeoResult } from './type'

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

export async function getUrlBody(url: string): Promise<AxiosPromise> {
  return axios(url, {
    method: 'GET',
  })
}

export async function getSeoSubmit(url: string): Promise<AxiosPromise> {
  return axios(getBelugaDomain() + '/sitecenter/seo/submit', {
    method: 'GET',
    params: { url },
  })
}

export async function getSeoResult(url: string): Promise<SeoResult> {
  return axios(getBelugaDomain() + '/sitecenter/seo/result', {
    method: 'GET',
    params: { url },
  })
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      return {}
    })
}
