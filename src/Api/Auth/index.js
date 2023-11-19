import { instance } from "../axios"

export const postLogin = async (data) => { // 로그인 요청 보내기
  return await instance.post("/users/login", data);
}

export const postLogout = async () => { // 로그아웃 요청 보내기
  return await instance.put("/users");
}

export const postRefresh = async (token) => { // 토큰 리프레쉬 요청 보내기
  return await instance.put("/users/login", {}, { headers: {
    "Refresh-Token": `Bearer ${token}`
  }})
}