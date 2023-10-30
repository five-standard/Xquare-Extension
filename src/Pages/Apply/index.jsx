import styled from "styled-components"
import { Box } from "../../components/Box"
import { Button } from "../../Components/Button"

export const Apply = () => {
  return <Wrapper>
    <Box style={{"justify-content": "space-between"}}>
      <h1>잔류 신청</h1>
      <ButtonBox>
        <Button text="잔류" />
        <Button text="금요귀가" id="selected" />
        <Button text="토요귀가" />
        <Button text="토요귀사" />
      </ButtonBox>
    </Box>
    <Box style={{"justify-content": "space-between"}}>
      <h1>주말급식 신청</h1>
      <ButtonBox>
        <Button text="신청" />
        <Button text="미신청" id="selected" />
      </ButtonBox>
    </Box>
  </Wrapper>
}

const Wrapper = styled.div`
  gap: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ButtonBox = styled.div`
  display: flex;
  gap: 5px;
`