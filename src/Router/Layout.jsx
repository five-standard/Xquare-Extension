import { Outlet } from "react-router-dom";
import { useRefresh } from "../hooks/useRefresh";
import { Nav } from "../Components/Common/Nav";
import { styled } from "styled-components";
import { Back } from "../Components/Common/Back";

export const Layout = ({ type }) => {
  useRefresh();

  return (
    <>
      {type === "nav" ? <Nav /> : <Back />}
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 35px);
  box-sizing: border-box;
  padding-bottom: 20px;
`;
