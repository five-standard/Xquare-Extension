import styled from "styled-components";

export const Wrapper = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const SubjDataBox = styled.div`
  gap: 10px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
  max-height: 250px;
  border-radius: 15px;
  &::-webkit-scrollbar { display: none; }
`