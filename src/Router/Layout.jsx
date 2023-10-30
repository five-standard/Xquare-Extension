import { Outlet } from "react-router-dom"
import { Nav } from "../Components/Nav"
import styled from "styled-components"

export const Layout = () => {
  return <>
    <Nav />
    <Outlet />    
  </>
}