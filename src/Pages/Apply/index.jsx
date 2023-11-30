import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { getPicnic, getStayCodes, getStayStatus, postStayStatus } from "../../Api/Apply"
import { Button } from "../../Components/Button"
import { messages } from "../../Utils/Utilities"
import { MapBox } from "../../Components/MapBox"
import { Box } from "../../components/Box"
import * as _ from "./style";

export const Apply = () => {
  const [codes, setCodes] = useState(undefined);
  const [state, setState] = useState(undefined);
  const [picnic, setPicnic] = useState(undefined);
  const words = {
    "start_time": "시작 시간",
    "end_time": "종료 시간",
    "reason": "사유",
    "teacher_name": "확인 교사",
  }

  useEffect(() => {
    getStayCodes().then(res => {
      res.data && setCodes(res.data.codes);
    }).catch(() => toast.error(<b>{messages.stay_codes}</b>))
    getStayStatus().then(res => {
      res.data && setState(res.data.status);
    }).catch(() => toast.error(<b>{messages.stay_status}</b>))
    getPicnic().then(res => {
      res.data && setPicnic(res.data);
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

  return <_.Wrapper>
    <Box>
      <h1>잔류 신청</h1>
      <_.ButtonBox>
        {
          codes && codes.map(i => {
            return <Button text={i.value.replaceAll(" ", "")} id={i.name === state && "selected"} className={i.name} action={handleClick}/>
          })
        }
      </_.ButtonBox>
    </Box>
    {
      picnic && <>
        <Box rotate>
          <h1 style={{"align-self": "start"}}>외출 안내</h1>
          {
            Object.entries(picnic).map((i) => {
              if(words[i[0]]) {
                return <MapBox style={{"justify-content": "space-between"}}>
                <h1>{words[i[0]]}</h1>
                <h2>{i[1]}</h2>
              </MapBox>
              }  
            })
          }
        </Box>
      </>
    }
  </_.Wrapper>
}