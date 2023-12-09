import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 15px);
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

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const Bottom = styled.h2`
  align-self: start;
  white-space: pre-wrap;
  word-break: break-all;
`