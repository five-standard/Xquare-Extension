import styled from "styled-components";

export const Button = ({ text, style, id, action }) => {
  return <Wrapper style={style} id={id} onClick={action} >
    {text}
  </Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 15px;
  background: #D9D9D9;
  box-sizing: border-box;
  padding: 10px 15px 10px 15px;
  color: #8C8C8C;
  &#selected {
    background: #9550F9;
    color: #ffffff;
  }
`