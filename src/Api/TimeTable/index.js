import { instance } from "../axios"

export const getTimeTable = async () => { // 시간표 불러오기
  return await instance.get("/timetables/week");
}