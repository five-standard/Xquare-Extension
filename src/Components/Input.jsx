import styled from "styled-components"

export const Input = ({ type, placeholder, value, action, id }) => {
  return <Component type={type} placeholder={placeholder} onChange={action} value={value} id={id} />
}

const Component = styled.input`
  width: 80%;
  height: 40px;
  padding: 10px;
  border-radius: 15px;
  box-sizing: border-box;
  background: ${({value}) => value !== "" ? "#eeeeee": "#dadada"};
  border: 1px solid ${({value}) => value !== "" ? "#9e9e9e" : "#aaaaaa"};
  &::placeholder { color: #605f66; }
`