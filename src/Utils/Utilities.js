import { Cookies } from "react-cookie";

export const Cookie = new Cookies();

export const Dates = new Date();

export const days = ["일", "월", "화", "수", "목", "금", "토"];

export const day = days[Dates.getDay()];

export const messages = {
  user: "유저 정보를 불러오는 데 실패했습니다.",
  meal: "급식 정보를 불러오는 데 실패했습니다.",
  timetable: "시간표를 불러오는 데 실패했습니다.",
  logout: "로그아웃하는 데 실패했습니다.",
  login_success: "로그인되었습니다.",
  login_fail: "로그인하는 데 실패했습니다.",
  error: "다시 시도해 주세요.",
}