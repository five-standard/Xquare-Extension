import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Dates, day, messages } from "../../Utils/Utilities";
import { getDirectors, getNotices } from "../../Api/All";
import { MapBox } from "../../Components/MapBox";
import { Box } from "../../components/Box";
import * as _ from "./style";

export const All = () => {
  const [director, setDirector] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    getDirectors().then(res => { // 자습감독 불러오기
      res.data && setDirector(res.data.self_study_list[Dates.getDate()-1].teacher);
    }).catch(() => toast.error(<b>{messages.director}</b>))
  }, [])

  const handleClick = (e) => {
    navigate(e.target.id);
  }

  return <_.Wrapper>
    <_.Row>
      <div>
        <Box style={{"width": "100%", "height": "100%"}} action={handleClick} id="/points" cursor>
          <h1 style={{"font-size": "20px", "color": "#5C5960"}}>상벌점 내역</h1>
        </Box>
        <Box style={{"width": "100%", "height": "100%"}} action={handleClick} id="/all" cursor>
          <h1 style={{"font-size": "20px", "color": "#5C5960"}}>개발중...</h1>
        </Box>
      </div>
      <div>
        <Box style={{"width": "100%", "min-height": "200px", "justify-content": "flex-start"}} rotate>
          <h1 style={{"align-self": "flex-start"}}>{day}요일 자습감독</h1>
          {
            director && director.map((i, j) => {
              if(i !== "") return <>
                <MapBox style={{"height": "45px", "justify-content": "space-between"}}>
                  <h1>{j+1}층</h1>
                  <h2>{i} 선생님</h2>
                </MapBox>
              </>
            })
          }
        </Box>
      </div>
    </_.Row>
  </_.Wrapper>
}