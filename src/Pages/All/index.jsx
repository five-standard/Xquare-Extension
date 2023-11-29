import { styled } from "styled-components";
import { Box } from "../../components/Box";
import { MapBox } from "../../Components/MapBox";
import { Dates, day, messages } from "../../Utils/Utilities";
import { today } from "../../Utils/Utilities";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDirectors, getNotices } from "../../Api/All";
import { toast } from "react-toastify";

export const All = () => {
  const navigate = useNavigate();
  const [director, setDirector] = useState(undefined);

  useEffect(() => {
    getDirectors().then(res => {
      res.data && setDirector(res.data.self_study_list[Dates.getDate()-1].teacher);
    }).catch(() => toast.error(<b>{messages.director}</b>))
  }, [])

  const handleClick = (e) => {
    navigate(e.target.id);
  }

  return <Wrapper>
    <Row>
      <div>
        <Box style={{"width": "100%", "height": "100%"}} action={handleClick} id="/points" cursor><h1 style={{"font-size": "20px", "color": "#5C5960"}}>상벌점 내역</h1></Box>
        <Box style={{"width": "100%", "height": "100%"}} action={handleClick} id="/all" cursor><h1 style={{"font-size": "20px", "color": "#5C5960"}}>개발중...</h1></Box>
      </div>
      <div>
        <Box style={{"width": "100%", "min-height": "200px", "justify-content": "flex-start"}} rotate>
          <h1 style={{"align-self": "flex-start"}}>{day}요일 자습감독</h1>
          {
            director && director.map((i, j) => {
              if(i !== "") return <MapBox style={{"height": "45px", "justify-content": "space-between"}}><h1>{j+1}층</h1><h2>{i} 선생님</h2></MapBox>
            })
          }
        </Box>
      </div>
    </Row>
  </Wrapper>
}

const Wrapper = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Row = styled.div`
  width: 90%;
  gap: 10px;
  display: flex;
  justify-content: center;
  & > div {
    gap: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 200px;
  }
`