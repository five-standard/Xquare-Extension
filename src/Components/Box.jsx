import styled from "styled-components";

export const Box = ({ children, height, style, action, rotate, cursor, id }) => {
  return <Component height={height} style={style} onClick={action} rotate={rotate} cursor={cursor} id={id}>
    {children}
  </Component>
}

const Component = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({rotate}) => rotate ? "column" : "row"};
  width: 90%;
  padding: 10px;
  border-radius: 15px;
  background: white;
  box-sizing: border-box;
  height: ${({height}) => height};
  cursor: ${({cursor}) => cursor ? "pointer": "default"};
`