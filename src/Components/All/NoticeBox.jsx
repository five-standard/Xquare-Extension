import { styled } from "styled-components";
import { toast } from "react-toastify";
import { useQuery } from "react-query";
import { messages } from "../../Utils/Utilities";
import { Profile } from "../Common/Profile";
import { getNotices } from "../../Api/All";
import { Box } from "../Box";

export const NoticeBox = () => {

  const { data } = useQuery(["notices"], getNotices, {
    onError: () => toast.error(<b>{messages.feeds}</b>),
    select: (data) => {
      return data.data.feeds[0];
    }
  })

  return <Component>
    <Box style={{width: "100%"}} $rotate>
      <Top>
        <Profile
          profile={data && {
            img: data.profile,
            name: data.name,
            sub: data.created_at.split("T")[0],
          }}
        />
      </Top>
      <Bottom>
        {
          data?.content
        }
      </Bottom>
    </Box>
  </Component>
}

const Component = styled.div`
  width: 196px;
`

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const Bottom = styled.h2`
  align-self: start;
  height: 133px;
  overflow-y: scroll;
  word-break: break-all;
  white-space: pre-wrap;
`