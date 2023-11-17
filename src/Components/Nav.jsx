import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useState } from "react";
import { Cookie } from "../Utils/Utilities";

export const Nav = () => {
  const navigate = useNavigate();
  const [cnt, setCnt] = useState(1);
  const sections = ["", "timetable", "apply", "all"];
  const isAccessToken = Cookie.get("accessToken") !== undefined;

  const setNav = (e) => {
    if(isAccessToken) {
      navigate(`/${e.target.className.split(" ")[2]}`)
      setCnt(Number(e.target.className.split(" ")[3]))
    }
  }

  return <Wrapper>
    <Points>
      {
        sections.map((i, j) => <Point token={isAccessToken} className={`${i} ${j+1}`} id={cnt===j+1 && "selected"} onClick={setNav} />)
      }
    </Points>
  </Wrapper>
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
`

const Points = styled.div`
  gap: 8px;
  display: flex;
  align-items: center;
`

const Point = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 65px;
  background: #D9D9D9;
  cursor: ${({token}) => token ? "pointer" : "not-allowed"};
  &#selected { background: #9550F9; }
`