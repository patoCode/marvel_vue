import axios from 'axios'

const params =
  '?ts=10000&apikey=e40f4886b47ef95960960534a1fcc8cf&hash=2623b04188c9e073ce09f520a8720cf9'

const marvelApi = axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public/',
})

export { marvelApi, params }
