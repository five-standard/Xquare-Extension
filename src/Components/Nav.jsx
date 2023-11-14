import { useNavigate } from "react-router-dom"
import { Cookie } from "../Utils/Objs";
import styled from "styled-components"
import { useState } from "react";

export const Nav = () => {
  const navigate = useNavigate();
  const [cnt, setCnt] = useState(1);
  const accessToken = Cookie.get("accessToken");

  const setNav = (e) => {
    if(accessToken) {
      navigate(`/${e.target.className.split(" ")[2]}`)
      setCnt(Number(e.target.className.split(" ")[3]))
    }
  }

  return <Wrapper>
    <Points>
      <Point token={accessToken} id={cnt===1 && "selected"} className=" 1" onClick={setNav} />
      <Point token={accessToken} id={cnt===2 && "selected"} className="timetable 2" onClick={setNav} />
      <Point token={accessToken} id={cnt===3 && "selected"} className="apply 3" onClick={setNav} />
      <Point token={accessToken} id={cnt===4 && "selected"} className="all 4" onClick={setNav} />
    </Points>
  </Wrapper>
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
`

const Points = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`

const Point = styled.div`
  width: 15px;
  height: 15px;
  background: #D9D9D9;
  border-radius: 65px;
  cursor: ${({token}) => token ? "pointer" : "not-allowed"};
  &#selected {
    background: #9550F9;
  }
`