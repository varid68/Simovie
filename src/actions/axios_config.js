import axios from "axios"
import { AsyncStorage } from "react-native"

import { BASE_URL } from "../configs/apiConfig"


const token = AsyncStorage.getItem("token")

export const generalAxios = () => {
  axios.defaults.baseURL = BASE_URL
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  axios.defaults.headers.common['Context-Type'] = "application/json"
  // axios.defaults.headers.common['']
}