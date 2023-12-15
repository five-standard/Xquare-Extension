import styled from "styled-components";

export const SubjDataBox = styled.div`
  gap: 5px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  border-radius: 15px;
  &::-webkit-scrollbar { display: none; }
`