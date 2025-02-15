import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://stoplight.io/mocks/kode-education/kode-bank/27774161/api',
  headers: {
    Authorization: 'Bearer 123',
    Accept: 'application/json',
  },
})

export const authApi = axios.create({
  baseURL: 'https://stoplight.io/mocks/kode-education/kode-bank/27774162/api/auth',
  headers: {
    Accept: 'application/json'
  }
})