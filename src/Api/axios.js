import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_KEY,
  timeout: 3000
})

instance.interceptors.request.use(
  res => {
    return res;
  }, 
  err => {
    return Promise.reject(err);
  }
)

instance.interceptors.response.use(
  res => { return res }, 
  err => { 
    // const {
    //   config,
    //   response: { status },
    // } = err;
    // if(status === 401 || status === 403) {
    //   const token = cookie.get("refreshToken");
    //   postRefresh(token).then(() => {
    //     return axios(config);
    //   })
    // }
    return Promise.reject(err);
    // else { return Promise.reject(err); }
  }
)