import { styled } from "styled-components";

export const Wrapper = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: calc(100% - 40px);
`

export const RowBox = styled.div`
  gap: 10px;
  display: flex;
  justify-content: center;
  width: 90%;
  & > div {
    gap: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`

export const PageButtonBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`