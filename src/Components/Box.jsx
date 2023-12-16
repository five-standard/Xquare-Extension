import styled from "styled-components";

export const Box = ({ children, className, action, style, $rotate, $inner }) => <Component onClick={action} style={style} $rotate={$rotate} $inner={$inner} className={className}>
  {children}
</Component>

const Component = styled.div`
  gap: ${({$inner}) => $inner ? "5px" : "10px"};
  display: flex;
  align-items: ${({$rotate}) => !$rotate && "center"};
  justify-content: space-between;
  flex-direction: ${({$rotate}) => $rotate ? "column" : "row"};
  width: ${({$inner}) => $inner ? "100%" : "90%"};
  max-height: 100%;
  padding: 10px;
  border-radius: 15px;
  background: ${({$inner}) => $inner ? "#F9F7FA" : "#FFFFFF"};
  box-sizing: border-box;
`