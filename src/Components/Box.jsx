import styled from "styled-components";

export const Box = ({ children, height, style, action, rotate, id }) => {
  return <Wrapper height={height} style={style} onClick={action} rotate={rotate} id={id}>
    {children}
  </Wrapper>
}

const Wrapper = styled.div`
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
  & h1 { // 제목
    font-size: 15px;
    color: #000000;
    font-weight: 500;
  }
  & h2 { // 내용
    font-size: 13px;
    color: #5C5960;
  }
  & h3 { // 내용 2
    font-size: 12px;
    color: #77757A;
  }
`