import { MemoryRouter, Routes, Route } from "react-router-dom";
import { TimeTable } from "../Pages/TimeTable";
// import { Apply } from "../Pages/Apply";
import { Login } from "../Pages/Login";
import { Home } from "../Pages/Home";
import { Dev } from "../Pages/Dev";
import { All } from "../Pages/All";
import { Layout } from "./Layout";

export const Router = () => {
  return <MemoryRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="timetable" element={<TimeTable />} />
        <Route path="apply" element={<Dev />} />
        <Route path="all" element={<All />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  </MemoryRouter>
}