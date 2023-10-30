import styled from "styled-components";

export const Box = ({ children, height, style, action }) => {
  return <Wrapper height={height} style={style} onClick={action}>
    {children}
  </Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: ${({height}) => height};
  gap: 15px;
  background: white;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 15px;
  & h1 {
    font-size: 15px;
    color: #000000;
    font-weight: 500;
  }
  & h2 {
    font-size: 13px;
    color: #5C5960;
  }
  & h3 {
    font-size: 12px;
    color: #77757A;
  }
`