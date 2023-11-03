import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_KEY,
  timeout: 3000
})