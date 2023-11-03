import { instance } from "../axios"

export const postLogin = async (data) => {
  return await instance.post("/users/login", data);
}

export const postLogout = async (token) => {
  return await instance.put("/users", {}, { headers: {
    Authorization: `Bearer ${token}`
  } })
}

export const postRefresh = async (token) => {
  return await instance.put("/users/login", {}, { headers: {
    "Refresh-Token": `Bearer ${token}`
  }})
}