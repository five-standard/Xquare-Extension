/*global chrome*/
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { Main } from "../Pages/Main";
import { Login } from "../Pages/Login";
import { SignUp } from "../Pages/SignUp";
import { Home } from "../Pages/Home";
import { token } from "../Utils/Atoms";
import { useRecoilState } from "recoil";

export const Router = () => {
  const [accessToken, setAccessToken] = useRecoilState(token);
  chrome.cookies.get({url: "http://localhost:3000", name: "accessToken"}).then(res => res && setAccessToken(res.value));
  
  return <MemoryRouter>
    <Routes>
      { !accessToken
        ? <>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </>
        : <>
        <Route path="/" element={<Home />} />
        </>
      }
    </Routes>
  </MemoryRouter>
}