import axios from 'axios';
import { Cookie } from '../Utils/Utilities';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_KEY,
  timeout: 3000
})

instance.interceptors.request.use(
  res => { 
    if(res.headers["Refresh-Token"] === undefined) {
      const accessToken = Cookie.get("accessToken");
      res.headers.authorization = accessToken && `Bearer ${accessToken}`;
    }
    return res;
  },
  err => { 
    return Promise.reject(err);
  }
)