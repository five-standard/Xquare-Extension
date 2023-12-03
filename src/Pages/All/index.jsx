import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Dates, day, messages } from "../../Utils/Utilities";
import { getDirectors, getNotices } from "../../Api/All";
import { ProfileBox } from "../../Components/ProfileBox";
import { MapBox } from "../../Components/MapBox";
import { Box } from "../../Components/Box";
import * as _ from "./style";

export const All = () => {
  const [director, setDirector] = useState(undefined);
  const [notice, setNotice] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    getDirectors().then(res => { // 자습감독 불러오기
      if(res.data) {
        const data = res.data.self_study_list[Dates.getDate()-1].teacher;
        const check = data.filter(i => i === "").length !== 5;
        check && setDirector(data);
      }
    }).catch(() => toast.error(<b>{messages.director}</b>))
    getNotices().then(res => { // 공지사항 불러오기
      res.data && setNotice(res.data.feeds[0]);
    }).catch(() => toast.error(<b>{messages.feeds}</b>))
  }, [])

  const handleClick = (e) => {
    navigate(e.target.id);
  }

  return <_.Wrapper>
    <_.RowBox>
      <div>
        <Box height="50%" style={{width: "100%"}} action={handleClick} id="/points" $cursor>
          <h1 style={{fontSize: "20px", color: "#5C5960"}} id="/points">상벌점 내역</h1>
        </Box>
        <Box height="50%" style={{width: "100%"}} action={handleClick} id="/all" $cursor>
          <h1 style={{fontSize: "20px", color: "#5C5960"}} id="/all">개발중...</h1>
        </Box>
      </div>
      <div>
        <Box style={{width: "100%", minHeight: "200px", justifyContent: "start"}} $rotate>
          <h1 style={{alignSelf: "start"}}>{day}요일 자습감독</h1>
          {
            director
            ? director.map((i, j) => {
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
            img: notice && notice.profile,
            name: notice && notice.name,
            sub: notice && notice.created_at.split("T")[0],
          }}
        />
        <h1>최근 공지사항</h1>
      </_.TopBox>
      <_.DataBox>
        {
          notice && <>{notice.content.split("\n").map((i, j) => { return <h1 key={j}>{i}</h1>})}</>
        }
      </_.DataBox>
    </Box>
  </_.Wrapper>
}