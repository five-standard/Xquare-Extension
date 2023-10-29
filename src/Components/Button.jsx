import { styled } from 'styled-components';

export const Button = ({ text, action, width, height, disabled }) => {  
  return <Content onClick={action} width={width} height={height} disabled={disabled}>
    {text}
  </Content>
}

const Content = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  font-size: 12px;
  background: ${({disabled}) => disabled ? "#EADCFF" : "#9550F9"};
  font-weight: 400;
  color: #ffffff;
  cursor: ${({disabled}) => disabled ? "not-allowed" : "pointer"};
  width: ${({width}) => width ? width : "250px"};
  height: ${({height}) => height ? height : "40px"};
  &:active {
    background: #EADCFF;
  }
`