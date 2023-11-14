import { useEffect, useState } from "react";
import { getTimeTable } from "../../Api/TimeTable";
import { days } from "../../Utils/DataTypes";
import { Box } from "../../components/Box";
import { updator } from "../../Utils/Atoms";
import { useRecoilValue } from "recoil";
import { Dates } from "../../Utils/Objs";
import * as _ from "./style";
import { toast } from "react-toastify";

export const TimeTable = () => {
  const [timeTable, setTimeTable] = useState(undefined);
  const today = Dates.getDay();
  const update = useRecoilValue(updator);

  useEffect(() => {
    getTimeTable().then(res => {
      res.data.week_timetable.map((i, k) => {
        if(i.week_day === today) {
          setTimeTable(res.data.week_timetable[k].day_timetable);
        }
      })
    }).catch(() => {})
  }, [update])

  return <_.Wrapper>
    <Box style={{"align-items": "center", "flex-direction": "column"}}>
      <h1 style={{"align-self": "flex-start"}}>시간표 ({days[today]})</h1>
      <_.SubjDataBox>
        {
          timeTable
          ? timeTable.map((i, k) => {
            const begin = i.begin_time.split(":");
            const end = i.end_time.split(":");
            return <_.SubjectBox>
              <div id="class" key={k}>
                <h1>{i.subject_name}</h1>
                <h2>{begin[0]}:{begin[1]} ~ {end[0]}:{end[1]}</h2>
              </div>
              <img src={i.subject_image} alt="" width={40} height={40} />
            </_.SubjectBox>
          })
          : <h1>등록된 수업이 없습니다.</h1>
        }
      </_.SubjDataBox>
    </Box>
    <Box height="70px" style={{"justify-content": "space-between", "cursor": "pointer", "padding-right": "20px", "padding-left": "20px"}} action={() => window.open("https://dsmhs.djsch.kr/scheduleH/list.do?m=0203&s=dsmhs")}>
      <h1 style={{"font-size": "20px", "color": "#5C5960"}}>학사일정</h1>
      <img src="/imgs/svg/Url.svg" width={20} height={20} />
    </Box>
  </_.Wrapper>
}