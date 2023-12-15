import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export const PageButton = ({ text, icon, to }) => {
  return <Component to={to}>
    <Text>{text}</Text>
    <IconBox>
      <Icon icon={icon} width="17px" color="#8C8C8C" />
    </IconBox>
  </Component>
}

const Component = styled(Link)`
  gap: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 196px;
  height: 50px;
  background: #FFFFFF;
  border-radius: 20px;
  text-decoration-line: none;
`

const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: #F9F7FA;
  border-radius: 50px;
`

const Text = styled.h1`
  font-size: 15px;
  color: #5C5960;
`
