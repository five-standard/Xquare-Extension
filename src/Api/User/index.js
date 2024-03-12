import { instance } from "../axios";

export const getUserSimple = async () => {
  // 메인화면 유저정보 불러오기
  return await instance.get("/user/simple");
};

export const getUserProfile = async () => {
  return await instance.get("/users");
};
