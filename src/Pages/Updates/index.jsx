import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { messages } from "../../Utils/Utilities";
import { getUpdates } from "../../Api/All";
import { Box } from "../../Components/Box";
import * as _ from "./style";

export const Updates = () => {
  const { data } = useQuery(["updates"], getUpdates, {
    onError: () => toast.error(<b>{messages.updates}</b>),
    select: (data) => {
      return [...data.data].reverse();
    }
  })
  const { REACT_APP_VER } = process.env;

  return <_.Wrapper>
    <_.DataBox>
      {
        data
        ? data.map((i, j) => {
          return <Box key={j} $rotate style={{border: `${i.ver === REACT_APP_VER ? "0.1px solid #9550F9" : ""}`}}>
            <_.Top>
              <h1>{i.ver}</h1>
              <h2>{i.date}</h2>
            </_.Top>
            <_.Bottom>
              {i.data.split(", ").map(i => `- ${i}\n`)}
            </_.Bottom>
          </Box>
        })
        : <h1>불러오고 있습니다..</h1>
      }
    </_.DataBox>
  </_.Wrapper>
}