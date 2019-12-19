import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8000'

export const userLogin = (prams) => axios.post('/login', prams)