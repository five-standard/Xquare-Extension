import { MemoryRouter, Routes, Route } from "react-router-dom";
import { TimeTable } from "../Pages/TimeTable";
import { Apply } from "../Pages/Apply";
import { Login } from "../Pages/Login";
import { Home } from "../Pages/Home";
import { All } from "../Pages/All";
import { Layout } from "./Layout";
import { Points } from "../Pages/Points";
import { Updates } from "../Pages/Updates";

export const Router = () => {
  return <MemoryRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="timetable" element={<TimeTable />} />
        <Route path="apply" element={<Apply />} />
        <Route path="all" element={<All />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/points" element={<Points />} />
      <Route path="/updates" element={<Updates />} />
    </Routes>
  </MemoryRouter>
}