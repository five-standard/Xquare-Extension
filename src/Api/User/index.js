import { instance } from "../axios"

export const getUserSimple = async () => {
  return await instance.get("/users/simple");
}