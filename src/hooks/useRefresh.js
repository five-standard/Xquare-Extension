/*global chrome*/
import { useSetRecoilState } from "recoil";
import { useEffect } from "react";
import axios from "axios";
import { refresh, token } from "../Utils/Atoms";
import { postRefresh } from "../Api/Auth";
import { instance } from "../Api/axios";

export const useRefresh = () => {
  const setAccessToken = useSetRecoilState(token);
  const setRefreshToken = useSetRecoilState(refresh);

  const error = instance.interceptors.response.use(
    res => { return res },
    err => {
      const {
        config,
        response: { status },
      } = err;
      if(status === 403) {
        chrome.cookies.get({url: "http://localhost:3000", name: "refreshToken"}).then(res =>
          res && postRefresh(res.value).then(res =>
            {
              chrome.cookies.set({url: "http://localhost:3000", name:"accessToken", value: res.data.access_token});
              chrome.cookies.set({url: "http://localhost:3000", name:"refreshToken", value: res.data.refresh_token});
              setAccessToken(res.data.access_token);
              setRefreshToken(res.data.refresh_token);
              config.headers.authorization = `Bearer ${res.data.access_token}`;
              return axios(config)
            }
          )
        )
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