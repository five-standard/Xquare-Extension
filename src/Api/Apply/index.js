import axios from "axios";
import { instance } from "../axios"

export const getStayCodes = async () => {
  return await instance.get("/applications/stay/codes/status");
}

export const getStayStatus = async () => {
  return await instance.get("/applications/stay");
}

export const postStayStatus = async (state) => {
  return await axios.put(`${process.env.REACT_APP_API_KEY}/applications/stay`, { status: state });
}