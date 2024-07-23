import axios from 'axios'

const narutoApi = axios.create({
    baseURL: 'https://dattebayo-api.onrender.com'
})
export default narutoApi
    