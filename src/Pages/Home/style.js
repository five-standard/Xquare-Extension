import styled from "styled-components";

export const Wrapper = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const MealTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  & > div {
    gap: 5px;
    display: flex;
    align-items: center;
  }
  & h4 {
    cursor: pointer;
    color: #5C5960;
    font-size: 12px;
  }
  & svg {
    cursor: pointer;
  }
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