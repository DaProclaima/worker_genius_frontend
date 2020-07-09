const axios = require('axios')
const dotenv = require('dotenv')

dotenv.config()

const api = axios.create({
  baseURL: process.env.api || 'http://localhost:3010/api/v1',
  timeout: 1000
})

const auth = axios.create({
  baseURL: process.env.auth || 'http://localhost:3017/api/v1/user',
  timeout: 1000
})
// console.log(api)
module.exports.webservices = { api, auth }
