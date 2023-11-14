import { instance } from "../axios"

export const postLogin = async (data) => {
  return await instance.post("/users/login", data);
}

export const postLogout = async () => {
  return await instance.put("/users");
}

export const postRefresh = async (token) => {
  return await instance.put("/users/login", {}, { headers: {
    Authorization: undefined,
    "Refresh-Token": `Bearer ${token}`
  }})
}