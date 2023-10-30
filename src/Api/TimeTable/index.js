import { instance } from "../axios"

export const getTimeTable = async (auth) => {
  return await instance.get("/timetables/week", { headers: { 
    Authorization: `Bearer ${auth}`
  }});
}