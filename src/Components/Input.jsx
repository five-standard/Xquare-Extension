import { styled } from 'styled-components';

export const Input = ({ type, placeholder, value, action, width, height }) => {
  return <Content placeholder={placeholder} type={type} value={value} action={action} width={width} height={height} />
}

Input.defaultProps = {
  type: "text",
  width: "280px",
  height: "35px"		
};

const Content = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  font-size: 12px;
  border: 1px solid #a7a7a7;
  font-weight: 500;
  color: #000000;
  cursor: text;
  width: ${(width) => width};
  height: ${(height) => height};
  &:focus {
    border: 1px solid #5C5960;
  }
`