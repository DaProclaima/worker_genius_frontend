
import axios from '../../node_modules/axios'
import socket from '/modules/socket.io.js'

dotenv.config()

const api = axios.create({
  baseURL: process.env.api || 'http://localhost:3010/api/v1',
  timeout: 1000

})

const auth = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  baseURL: process.env.auth || 'http://localhost:3017/api/v1/user',
  timeout: 1000

})

const io = socket(process.env.io || 'http://localhost:3013')

// export { api, auth, io }
