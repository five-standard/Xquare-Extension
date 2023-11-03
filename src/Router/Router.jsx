/*global chrome*/
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { refresh, token } from "../Utils/Atoms";
import { TimeTable } from "../Pages/TimeTable";
// import { Apply } from "../Pages/Apply";
import { Login } from "../Pages/Login";
import { Home } from "../Pages/Home";
import { Dev } from "../Pages/Dev";
import { Layout } from "./Layout";

export const Router = () => {
  const setAccessToken = useSetRecoilState(token);
  const setRefreshToken = useSetRecoilState(refresh);
  chrome.cookies.get({url: "http://localhost:3000", name:"accessToken"}).then(res => {
    res && setAccessToken(res.value);
  })
  chrome.cookies.get({url: "http://localhost:3000", name:"refreshToken"}).then(res => {
    res && setRefreshToken(res.value);
  })
  
  return <MemoryRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="timetable" element={<TimeTable />} />
        <Route path="apply" element={<Dev />} />
        <Route path="all" element={<Dev />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  </MemoryRouter>
}