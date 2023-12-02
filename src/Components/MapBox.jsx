import { styled } from "styled-components"

export const MapBox = ({ children, style }) => {
  return <Component style={style}>
    {children}
  </Component>
}

const Component = styled.div`
  gap: 5px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  border-radius: 15px;
  background: #F9F7FA;
  box-sizing: border-box;
  & > div#title, div#class {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  & > div#class { flex-direction: column; }
`