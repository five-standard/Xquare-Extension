import { instance } from "../axios"

export const getTodayMeals = async () => {
  const date = new Date();
  const today = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
  return await instance.get(`/meals/${today}`);
}