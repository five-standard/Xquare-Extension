import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Dates, day, messages } from "../../Utils/Utilities";
import { getDirectors, getNotices } from "../../Api/All";
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
    <_.Row>
      <div>
        <Box height="50%" style={{width: "100%"}} action={handleClick} id="/points" cursor>
          <h1 style={{fontSize: "20px", color: "#5C5960"}}>상벌점 내역</h1>
        </Box>
        <Box height="50%" style={{width: "100%"}} action={handleClick} id="/all" cursor>
          <h1 style={{fontSize: "20px", color: "#5C5960"}}>개발중...</h1>
        </Box>
      </div>
      <div>
        <Box style={{width: "100%", minHeight: "200px", justifyContent: "start"}} rotate>
          <h1 style={{alignSelf: "start"}}>{day}요일 자습감독</h1>
          {
            director
            ? director.map((i, j) => {
              if(i !== "") {
                return <>
                  <MapBox style={{height: "45px", justifyContent: "space-between"}}>
                    <h1>{j+1}층</h1>
                    <h2>{i} 선생님</h2>
                  </MapBox>
                </>
              }
            })
            : <h1 style={{alignSelf: "start"}}>자습 감독이 없습니다</h1>
          }
        </Box>
      </div>
    </_.Row>
    <Box height="100%" rotate>
      {/* <_.top>

      </_.top> */}
    </Box>
  </_.Wrapper>
}