import { Outlet } from "react-router-dom";
import { useRefresh } from "../Hooks/useRefresh";
import { Nav } from "../Components/Common/Nav";
import { styled } from "styled-components";

export const Layout = () => {
  useRefresh();

  return <>
    <Nav />
    <Wrapper>
      <Outlet />
    </Wrapper> 
  </>
}

const Wrapper = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 35px);
  box-sizing: border-box;
  padding-bottom: 20px;
`