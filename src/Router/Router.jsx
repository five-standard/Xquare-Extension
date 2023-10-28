import { MemoryRouter, Routes, Route } from "react-router-dom";
import { Main } from "../Pages/Main";
import { Login } from "../Pages/Login";

export const Router = () => {
  return <MemoryRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </MemoryRouter>
}