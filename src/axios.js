import axios from 'axios'
import {baseUrl} from './components/constant/constant'
const instance = axios.create({
    baseURL: baseUrl,
  });
  export default instance