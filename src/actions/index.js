import axios from 'axios'
import { generalAxios } from "./axios_config"

generalAxios()

export const get_api = (urlStr) => {
  return new Promise((resolve, reject) => {
    axios.get(urlStr).then(res => {
      resolve(res.data)
    })
      .catch(e => {
        reject(e.response)
      })
  })
}


export const post_api = (urlStr, body) => {
  return new Promise((resolve, reject) => {
    axios.post(urlStr, body).then(res => {
      resolve(res.data)
    })
      .catch(e => {
        reject(e.response)
      })
  })
}


export const put_api = (urlStr, body) => {
  return new Promise((resolve, reject) => {
    axios.put(urlStr, body).then(res => {
      resolve(res.data)
    })
      .catch(e => {
        reject(e.response)
      })
  })
}


export const delete_api = (urlStr) => {
  return new Promise((resolve, reject) => {
    axios.delete(urlStr).then(res => {
      resolve(res.data)
    })
      .catch(e => {
        reject(e.response)
      })
  })
}







