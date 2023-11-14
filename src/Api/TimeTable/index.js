import { instance } from "../axios"

export const getTimeTable = async () => {
  return await instance.get("/timetables/week");
}