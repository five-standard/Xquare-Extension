import { dayType } from "./Types";

export const Dates = new Date();

export const day = dayType[Dates.getDay()];

export const today = `${Dates.getFullYear()}-${String(Dates.getMonth() + 1).padStart(2, "0")}-${String(Dates.getDate()).padStart(2, "0")}`

export const year_month = (date) => { return `${Dates.getFullYear()}-${String(Dates.getMonth() + 1).padStart(2, "0")}-${String(date).padStart(2, "0")}`; }

export const lastDay = `${new Date(Dates.getFullYear(), Dates.getMonth()+1, 0).getDate()}`;

export const messages = {
  user: "유저 정보를 불러오는 데 실패했습니다.",
  meal: "급식 정보를 불러오는 데 실패했습니다.",
  director: "자습감독 선생님 목록을 불러오는 데 실패했습니다.",
  timetable: "시간표를 불러오는 데 실패했습니다.",
  logout: "로그아웃하는 데 실패했습니다.",
  login_success: "로그인되었습니다.",
  login_fail: "로그인하는 데 실패했습니다.",
  stay_codes: "잔류 코드를 불러오는 데 실패했습니다.",
  stay_status: "잔류 상태를 불러오는 데 실패했습니다.",
  stay_status_change: "잔류 상태를 변경하는 데 실패했습니다.",
  feeds: "최근 공지사항을 불러오는 데 실패했습니다.",
  points: "상/벌점 내역을 불러오는 데 실패했습니다.",
  updates: "업데이트 내역을 불러오는 데 실패했습니다.",
  error: "다시 시도해 주세요.",
}