import styled from "styled-components"

export const Input = ({ type, placeholder, value, action, id }) => {
  return <Content type={type} placeholder={placeholder} onChange={action} value={value} id={id} />
}

const Content = styled.input`
  width: 80%;
  height: 40px;
  padding: 10px;
  box-sizing: border-box;
  background: ${({value}) => value !== "" ? "#eeeeee": "#dadada"};
  border: 1px solid ${({value}) => value !== "" ? "#9e9e9e" : "#aaaaaa"};
  border-radius: 15px;
  &::placeholder { color: #605f66; }
`