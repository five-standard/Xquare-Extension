import styled from "styled-components";

export const Wrapper = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
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
`

export const ProfileBox = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
`

export const LoginBox = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
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
`

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`