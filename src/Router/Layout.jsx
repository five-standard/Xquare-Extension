import { Outlet } from "react-router-dom";
import { useRefresh } from "../hooks/useRefresh";
import { Nav } from "../Components/Nav";

export const Layout = () => {
  useRefresh();

  return <>
    <Nav />
    <Outlet />    
  </>
}