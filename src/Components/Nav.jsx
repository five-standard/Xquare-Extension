import { useNavigate, usenavigate} from "react-router-dom"
import styled from "styled-components"

export const Nav = () => {
  const navigate = useNavigate();
  return <Wrapper>
    <img src="/imgs/svg/Settings.svg" alt="" />
    <Points>
      <Point id="selected" onClick={() => navigate("/")} />
      <Point onClick={() => navigate("/timetable")} />
      <Point onClick={() => navigate("/apply")} />
      <Point onClick={() => navigate("/all")} />
    </Points>
  </Wrapper>
}

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 99fr;
  place-items: center center;
  box-sizing: border-box;
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
  &#selected {
    background: #9550F9;
  }
`