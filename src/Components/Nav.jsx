import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

export const Nav = () => {
  const navigate = useNavigate();
  const [cnt, setCnt] = useState(1);
  const sections = ["", "timetable", "apply", "all"];
  const isAccessToken = localStorage.getItem("accessToken") !== null;

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);
    return (() => {
      document.removeEventListener('keydown', handleKeydown);
    })
  })

  useEffect(() => {
    navigate(`/${sections[cnt-1]}`)
  }, [cnt]);
  
  const setNav = (e) => {
    if(isAccessToken) {
      navigate(`/${e.target.className.split(" ")[2]}`)
      setCnt(Number(e.target.className.split(" ")[3]))
    }
  }

  const handleKeydown = (e) => {
    if(isAccessToken) {
      if(e.code === "ArrowLeft" && cnt > 1) {
        setCnt(cnt => --cnt)
      } else if(e.code === "ArrowRight" && cnt < 4) {
        setCnt(cnt => ++cnt);
      }
    }
  }

  return <Component>
    <PointBox>
      {
        sections.map((i, j) => {
          return <Point $token={isAccessToken} className={`${i} ${j+1}`} key={j} id={cnt===j+1 ? "selected" : ""} onClick={setNav} />
        })
      }
    </PointBox>
  </Component>
}

const Component = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
`

const PointBox = styled.div`
  gap: 8px;
  display: flex;
  align-items: center;
`

const Point = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 65px;
  background: #D9D9D9;
  cursor: ${({$token}) => $token ? "pointer" : "not-allowed"};
  &#selected { background: #9550F9; }
`