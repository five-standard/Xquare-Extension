import styled from "styled-components"
import { Box } from "../../components/Box"
import { Button } from "../../Components/Button"
import { useEffect, useState } from "react"
import { getStayCodes, getStayStatus, postStayStatus } from "../../Api/Apply"
import { toast } from "react-toastify"

export const Apply = () => {
  const [codes, setCodes] = useState(undefined);
  const [state, setState] = useState(undefined);

  useEffect(() => {
    getStayCodes().then(res => {
      setCodes(res.data.codes);
    }).catch(() => {})
  }, [])

  useEffect(() => {
    getStayStatus().then(res => {
      setState(res.data.status);
    }).catch(() => {})
  }, [])

  const handleClick = (e) => {
    const name = e.target.className.split(" ")[2];
    if(state !== name) {
      setState(name);
      postStayStatus(name).then(() => {
        toast.success(`잔류 신청이 ${e.target.innerText}로 변경됬습니다.`)
      }).catch(() => {})
    }
  }

  return <Wrapper>
    <Box style={{"justify-content": "space-between"}}>
      <h1>잔류 신청</h1>
      <ButtonBox>
        {
          codes && codes.map(i => {
            return <Button text={i.value.replaceAll(" ", "")} id={i.name === state && "selected"} className={i.name} action={handleClick}/>
          })
        }
      </ButtonBox>
    </Box>
    <Box style={{"justify-content": "space-between"}}>
      <h1>주말급식 신청</h1>
      <ButtonBox>
        <Button text="신청" />
        <Button text="미신청" id="selected" />
      </ButtonBox>
    </Box>
  </Wrapper>
}

const Wrapper = styled.div`
  gap: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ButtonBox = styled.div`
  display: flex;
  gap: 5px;
`