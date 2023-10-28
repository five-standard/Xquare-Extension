import { styled } from 'styled-components';

export const Button = ({ text, action, width, height }) => {  
  return <Content onClick={action} width={width ? width : "250px"} height={height ? height : "40px"}>
    {text}
  </Content>
}

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  font-size: 10px;
  background: #9550F9;
  font-weight: 400;
  color: #ffffff;
  cursor: pointer;
  width: ${(width) => width};
  &:active {
    background: #EADCFF;
  }
`