import { styled } from "styled-components";

export const Wrapper = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Row = styled.div`
  gap: 10px;
  display: flex;
  justify-content: center;
  width: 90%;
  & > div {
    gap: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 200px;
  }
`