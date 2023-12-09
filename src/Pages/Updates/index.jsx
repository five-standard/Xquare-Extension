import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { messages } from "../../Utils/Utilities";
import { Back } from "../../Components/Back";
import { getUpdates } from "../../Api/All";
import { Box } from "../../Components/Box";
import * as _ from "./style";

export const Updates = () => {
  const { data } = useQuery(["updates"], getUpdates, {
    onError: () => toast.error(<b>{messages.points}</b>)
  })

  return <_.Wrapper>
    <Back />
    <_.DataBox>
      {
        data
        ? data.data.map((i, j) => {
          return <Box key={j} $rotate>
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