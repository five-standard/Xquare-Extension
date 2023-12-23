import { styled } from "styled-components";

export const Wrapper = styled.div`
  gap: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const Data = styled.div`
  gap: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 120%;
  }
`

export const Img = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50px;
`