import styled from "styled-components";

export const Wrapper = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const DataBox = styled.div`
  gap: 3px;
  display: flex;
  flex-direction: column;
`

export const MealBox = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  min-height: 85px;
  background: #F9F7FA;
  border-radius: 15px;
  box-sizing: border-box;
  & > h2 { width: 80%; }
`

export const MealDataBox = styled.div`
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

export const ProfileBox = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
`

export const LogoutBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 10px;
  background: #F9F7FA;
  box-sizing: border-box;
  padding: 10px 15px 10px 15px;
  color: #FF7575;
  font-size: 12px;
  font-weight: 500;
`

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`