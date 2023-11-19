import { useSetRecoilState } from "recoil";
import { useEffect } from "react";
import { updator } from "../Utils/Atoms";
import { postRefresh } from "../Api/Auth";
import { instance } from "../Api/axios";
import { Cookie } from "../Utils/Utilities";

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
        const refreshToken = Cookie.get("refreshToken");
        postRefresh(refreshToken).then(res => {
          Cookie.set("accessToken", res.data.access_token);
          Cookie.set("refreshToken", res.data.refresh_token);
          setUpdate(update => !update);
          return;
        })
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