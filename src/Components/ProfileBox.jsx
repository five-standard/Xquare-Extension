import { styled } from "styled-components";
import Profile from "../Assets/imgs/Profile.svg";

export const ProfileBox = ({ profile }) => {
  return <Component>
    <ImgElement src={profile.img ? profile.img : Profile} alt="" />
    <TextBox>
      <h1>{profile.name ? profile.name : "아무개"}</h1>
      <h2>{profile.sub ? profile.sub : "-"}</h2>
    </TextBox>
  </Component>
}

const Component = styled.div`
  gap: 15px;
  display: flex;
`

const TextBox = styled.div`
  gap: 3px;
  display: flex;
  flex-direction: column;
`

const ImgElement = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50px;
`