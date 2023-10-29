import { instance } from "../axios"

export const postLogin = async (data) => {
  return await instance.post("/users/login", data);
}