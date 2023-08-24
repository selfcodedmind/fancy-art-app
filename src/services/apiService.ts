import Axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios'

class ApiService {
  private instance: AxiosInstance
  constructor() {
    this.instance = Axios.create({
      baseURL: 'https://api.artic.edu/api/'
    })
  }

  async get(url: string, config?: AxiosRequestConfig) {
    return await this.instance.get(url, config)
  }
}

export const apiService = new ApiService()
