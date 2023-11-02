import styled from "styled-components"
import { Box } from "../../components/Box"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Login = () => {
  const [data, setData] = useState({
    account_Id: "",
    password: ""
  })
  const navigate = useNavigate();

  const handleSubmit = () => {
    
  }

  return <Wrapper>
    <Back src="/imgs/svg/Back.svg" alt="" onClick={() => navigate("/")} />
    <div>
      <button />
    </div>
  </Wrapper>
}

const Wrapper = styled.div`
  gap: 15px;
  display: grid;
  grid-template-columns: 1fr 99fr;
  place-items: center center;
`

const Back = styled.img`
  cursor: pointer;
`
