import { instance } from "../axios";

export const getDirectors = async () => {
  // 자습감독 선생님 불러오기
  return await instance.get(`/self-study/today`);
};

export const getNotices = async () => {
  // 공지사항 불러오기
  return await instance.get(
    "/feeds/?category=38313230-3434-3839-2d62-6133372d3131"
  );
};

export const getPoints = async (type) => {
  return await instance.get(`/points/history?type=${type}`);
};

export const getUpdates = async () => {
  return await instance.get(
    "https://my-json-server.typicode.com/five-standard/xquare-extension/updates"
  );
};
