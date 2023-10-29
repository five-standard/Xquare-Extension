import { instance } from "../axios"

export const getTodayMeal = async (data) => {
  const date = new Date();
  return await instance.post("/meals", data);
}