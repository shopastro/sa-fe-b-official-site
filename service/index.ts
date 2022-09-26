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

export async function getSeoSubmit(url: string): Promise<any> {
  return axios(getBelugaDomain() + '/sitecenter/seo/submit', {
    method: 'GET',
    params: { url },
  })
    .then()
    .catch((e) => console.error(e))
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

export async function getUploadTicket({
  fileName,
  fileSuffix,
}: {
  fileName: string
  fileSuffix: string
}): Promise<{ data?: { fileName: string; uploadTicket: string }; success: boolean }> {
  return axios(getBelugaDomain() + '/sitecenter/file/upload', {
    method: 'GET',
    params: { fileName, fileSuffix },
  })
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      return {}
    })
}

export async function uploadFile({ uploadTicket, file }: { uploadTicket: string; file: any }): Promise<SeoResult> {
  return axios
    .put(uploadTicket, file, {
      headers: { 'Content-Type': file.type },
    })
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      return {}
    })
}
