import { instance } from "../axios";
import { year_month } from "../../Utils/Utilities";

export const getTodayMeals = async (date) => {
  // 오늘 급식 불러오기
  return await instance.get(`/meal/date?date=${year_month(date)}`);
};
