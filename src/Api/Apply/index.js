import axios from "axios";
import { instance } from "../axios"

export const getStayCodes = async () => { // 잔류 항목 불러오기
  return await instance.get("/applications/stay/codes/status");
}

export const getStayStatus = async () => { // 잔류 정보 불러오기
  return await instance.get("/applications/stay");
}

export const postStayStatus = async (state) => { // 잔류 상태 변경 요청 보내기
  return await axios.put(`${process.env.REACT_APP_API_KEY}/applications/stay`, { status: state });
}