/*global chrome*/
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Layout } from "./Layout";
import { TimeTable } from "../Pages/TimeTable";
import { Apply } from "../Pages/Apply";
import { token } from "../Utils/Atoms";
import { useSetRecoilState } from "recoil";

export const Router = () => {
  const setAccessToken = useSetRecoilState(token);
  chrome.cookies.get({url: "http://localhost:3000", name:"accessToken"}).then(res => {
      if(res.value) setAccessToken(res.value);
  })

  return <MemoryRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="timetable" element={<TimeTable />} />
        <Route path="apply" element={<Apply />} />
      </Route>
    </Routes>
  </MemoryRouter>
}