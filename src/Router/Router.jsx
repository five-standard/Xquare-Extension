import { MemoryRouter, Routes, Route } from "react-router-dom";
import { TimeTable } from "../Pages/TimeTable";
import { Apply } from "../Pages/Apply";
import { Login } from "../Pages/Login";
import { Home } from "../Pages/Home";
import { All } from "../Pages/All";
import { Layout } from "./Layout";
import { Points } from "../Pages/Points";
import { Updates } from "../Pages/Updates";
import { Profile } from "../Pages/Profile";
import { Notices } from "../Pages/Notices";

export const Router = () => {
  return <MemoryRouter>
    <Routes>
      <Route path="/" element={<Layout type="nav"/>}>
        <Route path="" element={<Home />} />
        <Route path="timetable" element={<TimeTable />} />
        <Route path="apply" element={<Apply />} />
        <Route path="all" element={<All />} />
      </Route>
      <Route element={<Layout type="back"/>}>
        <Route path="/login" element={<Login />} />
        <Route path="/points" element={<Points />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/profile" element={<Profile />}/>
      </Route>
    </Routes>
  </MemoryRouter>
}