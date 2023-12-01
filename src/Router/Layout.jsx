import { Outlet } from "react-router-dom";
import { useRefresh } from "../Hooks/useRefresh";
import { Nav } from "../Components/Nav";

export const Layout = () => {
  useRefresh();

  return <>
    <Nav />
    <Outlet />    
  </>
}