import { useSetRecoilState } from "recoil";
import { useEffect } from "react";
import { postRefresh } from "../Api/Auth";
import { updator } from "../Utils/Atoms";
import { instance } from "../Api/axios";

export const useRefresh = () => {
  const setUpdate = useSetRecoilState(updator);

  const error = instance.interceptors.response.use(
    res => { return res },
    err => {
      const { 
        config,
        response: { status } 
      } = err;
      if(status === 403) {
        const refreshToken = localStorage.getItem("refreshToken");
        postRefresh(refreshToken).then(res => {
          localStorage.setItem("accessToken", res.data.access_token);
          localStorage.setItem("refreshToken", res.data.refresh_token);
          setUpdate(update => !update);
        }).catch(() => {});
        return err.response;
      } else {
        return Promise.reject(err);
      }
    }
  )

  useEffect(() =>{
    return(() => {
      instance.interceptors.response.eject(error)
    })
  }, [error])
}