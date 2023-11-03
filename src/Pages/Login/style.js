import styled from "styled-components";

export const Wrapper = styled.div`
  gap: 15px;
  display: grid;
  place-items: center center;
  grid-template-rows: 1fr 99fr;
  width: 100%;
  height: 450px;
`

export const InputBox = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

export const Back = styled.img`
  place-self: start;
  cursor: pointer;
`