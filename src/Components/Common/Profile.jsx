import { styled } from "styled-components";
import Default from "../../Assets/imgs/Default.svg";

const sampleData = {
  img: Default,
  name: "아무개",
  sub: "-"
}

export const Profile = ({ profile=sampleData }) => {
  return <Component>
    <ImgElement src={profile.img} alt="" />
    <TextBox>
      <h1>{profile.name}</h1>
      <h2>{profile.sub}</h2>
    </TextBox>
  </Component>
}


const Component = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
`

const TextBox = styled.div`
  gap: 3px;
  display: flex;
  flex-direction: column;
`

const ImgElement = styled.img`
  border-radius: 50px;
`