import { toast } from "react-toastify";
import { useQuery } from "react-query";
import { Dates, day, messages } from "../../Utils/Utilities";
import { getDirectors, getNotices } from "../../Api/All";
import { ProfileBox } from "../../Components/ProfileBox";
import { PageButton } from "../../Components/PageButton";
import { MapBox } from "../../Components/MapBox";
import { Box } from "../../Components/Box";
import * as _ from "./style";

export const All = () => {

  const { data: noticeData } = useQuery(["notices"], getNotices, {
    onError: () => toast.error(<b>{messages.feeds}</b>)
  })
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
  <Box style={{width: "195px"}} $rotate>
    <_.TopBox>
      <ProfileBox 
        profile={{
          img: noticeData && noticeData.data.feeds[0].profile,
          name: noticeData && noticeData.data.feeds[0].name,
          sub: noticeData && noticeData.data.feeds[0].created_at.split("T")[0],
        }}
      />
    </_.TopBox>
    <_.DataBox>
      {
        noticeData && noticeData.data.feeds[0].content
      }
    </_.DataBox>
  </Box>
  <Box style={{width: "195px", minHeight: "200px", justifyContent: "start"}} $rotate>
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
</Box>
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