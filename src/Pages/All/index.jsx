import { toast } from "react-toastify";
import { useQuery } from "react-query";
import { Dates, messages } from "../../Utils/Utilities";
import { getDirectors } from "../../Api/All";
// import { ProfileBox } from "../../Components/ProfileBox";
import { PageButton } from "../../Components/Common/PageButton";
import * as _ from "./style";
import { NoticeBox } from "../../Components/All/NoticeBox";

export const All = () => {

  const { data: directorData } = useQuery(["directors"], getDirectors, {
    onError: () => toast.error(<b>{messages.director}</b>)
  })

  const director = directorData?.data.self_study_list[Dates.getDate()-1].teacher;

  return <>
    <_.PageButtonBox>
      <PageButton to="/points" text="상벌점 내역" icon="mdi:like-outline" />
      <PageButton to="/updates" text="업데이트 내역" icon="ic:baseline-update" />
    </_.PageButtonBox>
    <_.PageButtonBox>
      <PageButton to="/profile" text="내 프로필" icon="gg:profile" />
      <PageButton to="/notices" text="최근 공지사항" icon="ic:outline-announcement" />
    </_.PageButtonBox>
    <_.PageButtonBox>
      <NoticeBox />
    </_.PageButtonBox>
  </>
}

/* <Box style={{width: "100%", minHeight: "200px", justifyContent: "start"}} $rotate>
  <h1 style={{alignSelf: "start"}}>{day}요일 자습감독</h1>
  {
    director?.filter(i => i === "").length !== 5
    ? director?.map((i, j) => {
      if(i !== "") {
        return <MapBox style={{height: "45px", justifyContent: "space-between"}} key={j}>
          <h1>{j+1}층</h1>
          <h2>{i} 선생님</h2>
        </MapBox>
      }
    })
    : <h2 style={{alignSelf: "start"}}>자습 감독이 없습니다</h2>
  }
</Box> */