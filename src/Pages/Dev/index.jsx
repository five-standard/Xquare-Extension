import { styled } from "styled-components";

export const Dev = () => {
  return <Wrapper>
    <h1>아직 개발중인 기능입니다.</h1>
    <h1>불편 사항은 아래 이메일로 보내주세요</h1>
    <h1>dbrrlwns1127@dsm.hs.kr</h1>
  </Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 400px;
  & > h1 {
    font-size: 15px;
    font-weight: 500;
  }
`