import { Dates } from "../../Utils/Utilities";
import { instance } from "../axios"

export const getDirectors = async () => { // 자습감독 선생님 불러오기
  return await instance.get(`/pick/admin/director?month=${Dates.getMonth()+1}`);
}