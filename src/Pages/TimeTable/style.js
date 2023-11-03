import styled from "styled-components";

export const Wrapper = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const SubjectBox = styled.div`
  gap: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  min-height: 60px;
  background: #F9F7FA;
  border-radius: 15px;
  box-sizing: border-box;
  & > div#class {
    gap: 2px;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  & > h2 { width: 30%; }
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