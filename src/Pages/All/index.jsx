import { styled } from "styled-components";
import { Box } from "../../components/Box";

export const All = () => {
  return <Wrapper>
    <Row>
      <div>
        <Box height="95px" style={{"width": "100%"}}><h1 style={{"font-size": "20px", "color": "#5C5960"}}>상벌점 내역</h1></Box>
        <Box height="95px" style={{"width": "100%"}}><h1 style={{"font-size": "20px", "color": "#5C5960"}}>깃허브 랭킹</h1></Box>
      </div>
      <div>
        <Box style={{"width": "100%"}} />
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