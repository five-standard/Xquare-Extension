import { styled } from "styled-components";
import { Box } from "../../components/Box";
import { MapBox } from "../../Components/MapBox";
import { day } from "../../Utils/Utilities";
import { today } from "../../Utils/Utilities";
import { useNavigate } from "react-router-dom";

export const All = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate(e.target.id);
  }

  return <Wrapper>
    <Row>
      <div>
        <Box height="95px" style={{"width": "100%"}} action={handleClick} id="/points"><h1 style={{"font-size": "20px", "color": "#5C5960", "cursor": "pointer"}}>상벌점 내역</h1></Box>
        <Box height="95px" style={{"width": "100%"}} action={handleClick} id="/home"><h1 style={{"font-size": "20px", "color": "#5C5960", "cursor": "pointer"}}>개발중...</h1></Box>
      </div>
      <div>
        <Box style={{"width": "100%", "min-height": "200px", "justify-content": "flex-start"}} rotate>
          <h1 style={{"align-self": "flex-start"}}>{day}요일 자습감독</h1>
          <MapBox style={{"height": "45px"}}><h1>2층</h1><h2>정은진 선생님</h2></MapBox>
          <MapBox style={{"height": "45px"}}><h1>3층</h1><h2>정은진 선생님</h2></MapBox>
          <MapBox style={{"height": "45px"}}><h1>4층</h1><h2>정은진 선생님</h2></MapBox>
        </Box>
      </div>
    </Row>
  </Wrapper>
}

const Wrapper = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  width: 100%;
  gap: 10px;
  display: flex;
  & > div {
    gap: 10px;
    display: flex;
    flex-direction: column;
    width: 60%;
  }
`