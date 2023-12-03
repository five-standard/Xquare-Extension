import { styled } from "styled-components";

export const Wrapper = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 15px);
`

export const ButtonBox = styled.div`
  gap: 5px;
  display: flex;
  margin-top: -15px;
`

export const DataBox = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 5px;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
`