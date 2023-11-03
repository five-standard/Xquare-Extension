import styled from "styled-components";

export const Button = ({ text, style, id, action }) => {
  return <Wrapper style={style} id={id} onClick={action} >
    {text}
  </Wrapper>
}

const Wrapper = styled.div`
  background: #D9D9D9;
  color: #8C8C8C;
  padding: 10px 15px 10px 15px;
  box-sizing: border-box;
  border-radius: 15px;
  cursor: pointer;
  &#selected {
    background: #9550F9;
    color: #ffffff;
  }
`