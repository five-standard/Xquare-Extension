import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export const Back = ({ to }) => {
  return <Component to={to}>
    <Icon icon="ph:arrow-up-bold" color="#5C5960" rotate="270deg" width="20px" />
  </Component>
}

const Component = styled(Link)`
  justify-self: start;
  align-self: start;
  cursor: pointer;
`