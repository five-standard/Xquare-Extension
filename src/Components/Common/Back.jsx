import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { Icon as IconElement } from "@iconify/react";

export const Back = () => {
  return <Component>
    <Link to="/">
      <IconElement icon="ph:arrow-up-bold" color="#5C5960" rotate="270deg" width="20px" />
    </Link>
  </Component>
}

const Component = styled.div`
  width: 100%;
  padding: 5.25px;
  cursor: pointer;
  box-sizing: border-box;
`