import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { Icon as IconElement } from "@iconify/react";

export const Back = () => {
  return <Component to="/">
    <IconElement icon="ph:arrow-up-bold" color="#5C5960" rotate="270deg" width="20px" />
  </Component>
}

const Component = styled(Link)`
  align-self: start;
  justify-self: start;
  cursor: pointer;
`