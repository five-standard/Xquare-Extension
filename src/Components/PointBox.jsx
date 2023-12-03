import { styled } from "styled-components"

export const PointBox = ({ data }) => {
  return <Component $type={data.type}>
    <DataBox>
      <h1>{data.reason}</h1>
      <h2>{data.date}</h2>
    </DataBox>
    <h1 style={{fontSize: "20px"}}>{data.point}</h1>
  </Component>
}

const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  padding: 13px;
  border-radius: 15px;
  box-sizing: border-box;
  border: 0.1px solid ${({$type}) => $type ? "#7e94ff" : "#F64E4E"};
  box-shadow: 0.1px 0.1px 5px ${({$type}) => $type ? "#7e94ff" : "#F64E4E"};
`

const DataBox = styled.div`
  display: flex;
  flex-direction: column
`