import { styled } from "styled-components";
import { toast } from "react-toastify";
import { useQuery } from "react-query";
import { day, messages } from "../../Utils/Utilities";
import { getDirectors } from "../../Api/All";
import { Box } from "../Box";

export const DirectBox = () => {

  const { data } = useQuery(["directrs"], getDirectors, {
    onError: () => toast.error(<b>{messages.director}</b>),
    select: (data) => {
      return data.data.self_study_list[4]?.teacher;
    }
  })

  return <Component>
    <Box style={{width: "100%"}} $rotate>
      <h1 style={{alignSelf: "start"}}>{day}요일 자습감독</h1>
      <DivBox>
        {
          data?.filter(i => i === "").length !== 5
          ? data?.map((i, j) => {
            if(i !== "") {
              return <Box $inner style={{width: "100%"}} key={j}>
                <h1>{j+1}층</h1>
                <h2>{i} 선생님</h2>
              </Box>
            }
          })
          : <h2 style={{alignSelf: "start"}}>자습 감독이 없습니다</h2>
        }
      </DivBox>
    </Box>
  </Component>
}

const Component = styled.div`
  width: 196px;
`

const DivBox = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: column;  
`