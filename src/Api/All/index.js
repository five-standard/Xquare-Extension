import { instance } from "../axios"

export const getStayCodes = async () => { // 자습감독 선생님 불러오기
  return await instance.get("/admin/director");
}