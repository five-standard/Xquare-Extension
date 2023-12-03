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

export const TopBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const DataBox = styled.div`
  display: flex;
  flex-direction: column;
  align-self: start;
  width: 100%;
  height: 100%;
  max-height: 105px;
  overflow-y: scroll;
`