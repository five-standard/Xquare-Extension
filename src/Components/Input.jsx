import { styled } from 'styled-components';

export const Input = ({ type, placeholder, value, action, width, height, id }) => {
  return <Content placeholder={placeholder} type={type} value={value} onChange={action} width={width} height={height} id={id} />
}

const Content = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  font-size: 12px;
  border: 1px solid ${({value}) => value==="" ? "#C0BFC4" : "#a7a7a7"};
  font-weight: 500;
  color: #000000;
  background: ${({value}) => value==="" ? "#F9F7FA" : "#ffffff"};
  cursor: text;
  width: ${({width}) => width ? width : "280px"};
  height: ${({height}) => height ? height : "35px"};
  &:focus {
    border: 1px solid ${({value}) => value==="" ? "#C0BFC4" : "#5C5960"};
  }
  &::placeholder {
    color: #C0BFC4;
  }
`