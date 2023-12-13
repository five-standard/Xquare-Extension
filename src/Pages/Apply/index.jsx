import { toast } from "react-toastify";
import { useQuery } from "react-query";
import { getPicnic, getStayCodes, getStayStatus, postStayStatus } from "../../Api/Apply";
import { Button } from "../../Components/Button";
import { messages } from "../../Utils/Utilities";
import { MapBox } from "../../Components/MapBox";
import { picnicType } from "../../Utils/Types";
import { Box } from "../../Components/Box";
import * as _ from "./style";

export const Apply = () => {

  const { data: codes } = useQuery(["codes"], getStayCodes, {
    onError: () => toast.error(<b>{messages.meal}</b>)
  })
  const { data: state, refetch } = useQuery(["state"], getStayStatus, {
    onError: () => toast.error(<b>{messages.user}</b>)
  })
  const { data: picnic } = useQuery(["picnic"], getPicnic, {
    retry: false
  })

  const handleClick = (e) => {
    const name = e.target.className.split(" ")[2];
    if(state !== name) {
      postStayStatus(name).then(() => {
        refetch(["state"]);
        toast.success(`잔류 신청이 ${e.target.innerText}로 변경됐습니다.`)
      }).catch(() => toast.error(<b>{messages.stay_status_change}</b>))
    }
  }

  return <_.Wrapper>
    <Box>
      <h1>잔류 신청</h1>
      <_.ButtonBox>
        {
          codes && state && codes.data.codes.map((i, j) => {
            return <Button text={i.value} key={j} id={i.name === state.data.status ? "selected" : ""} className={i.name} action={handleClick} />
          })
        }
      </_.ButtonBox>
    </Box>
    {
      picnic && <Box $rotate>
        <h1 style={{alignSelf: "start"}}>외출 안내</h1>
        {
          Object.entries(picnic.data).map((i, j) => {
            if(picnicType[i[0]]) {
              return <MapBox style={{justifyContent: "space-between"}} key={j}>
                <h1>{picnicType[i[0]]}</h1>
                <h2>{i[1]}</h2>
              </MapBox>
            }
          })
        }
      </Box>
    }
  </_.Wrapper>
}