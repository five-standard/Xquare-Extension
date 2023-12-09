import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Dates, day, messages } from "../../Utils/Utilities";
import { getDirectors, getNotices } from "../../Api/All";
import { ProfileBox } from "../../Components/ProfileBox";
import { MapBox } from "../../Components/MapBox";
import { Box } from "../../Components/Box";
import * as _ from "./style";
import { useQuery } from "react-query";

export const All = () => {
  const navigate = useNavigate();

  const { data: noticeData } = useQuery(["notices"], getNotices, {
    onError: () => toast.error(<b>{messages.feeds}</b>)
  })
  const { data: directorData } = useQuery(["directors"], getDirectors, {
    onError: () => toast.error(<b>{messages.director}</b>)
  })

  const director = directorData?.data.self_study_list[Dates.getDate()-1].teacher;

  const handleClick = (e) => {
    navigate(e.target.id);
  }

  return <_.Wrapper>
    <_.RowBox>
      <div>
        <Box height="50%" style={{width: "100%"}} action={handleClick} id="/points" $cursor>
          <h1 style={{fontSize: "20px", color: "#5C5960"}} id="/points">상벌점 내역</h1>
        </Box>
        <Box height="50%" style={{width: "100%"}} action={handleClick} id="/updates" $cursor>
          <h1 style={{fontSize: "20px", color: "#5C5960"}} id="/updates">업데이트 내역</h1>
        </Box>
      </div>
      <div>
        <Box style={{width: "100%", minHeight: "200px", justifyContent: "start"}} $rotate>
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
      </div>
    </_.RowBox>
    <Box height="100%" $rotate>
      <_.TopBox>
        <ProfileBox 
          profile={{
            img: noticeData && noticeData.data.feeds[0].profile,
            name: noticeData && noticeData.data.feeds[0].name,
            sub: noticeData && noticeData.data.feeds[0].created_at.split("T")[0],
          }}
        />
        <h1>최근 공지사항</h1>
      </_.TopBox>
      <_.DataBox>
        {
          noticeData && noticeData.data.feeds[3].content
        }
      </_.DataBox>
    </Box>
  </_.Wrapper>
}