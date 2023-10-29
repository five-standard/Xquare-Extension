import { instance } from "../axios"

export const getUserSimple = async (auth) => {
  return await instance.get("/users/simple", { headers: { 
    Authorization: `Bearer ${auth}`
  }});
}