import styled from "styled-components";
import { Button } from "../../Components/Button";
import { Back } from "../../Components/Back";

export const Points = () => {
  return <Wrapper>
    <Back to="/all" />
    <ButtonBox>
      <Button text="전체" id="selected" />
      <Button text="상점" />
      <Button text="벌점" />
    </ButtonBox>
  </Wrapper>
}

const Wrapper = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

const ButtonBox = styled.div`
  gap: 5px;
  display: flex;
`

