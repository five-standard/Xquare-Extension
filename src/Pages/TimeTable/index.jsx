import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { toast } from "react-toastify";
import { Dates, messages, day } from "../../Utils/Utilities";
import { getTimeTable } from "../../Api/TimeTable";
import { MapBox } from "../../Components/MapBox";
import { updator } from "../../Utils/Atoms";
import { Box } from "../../components/Box";
import * as _ from "./style";

export const TimeTable = () => {
  const [timeTable, setTimeTable] = useState(undefined);
  const update = useRecoilValue(updator);
  const today = Dates.getDay();

  useEffect(() => {
    getTimeTable().then(res => {
      const result = (res.data.week_timetable.filter(i => i.week_day === today))[0];
      setTimeTable(result.day_timetable);
    }).catch(() => toast.error(<b>{messages.timetable}</b>))
  }, [update])

  const handleOpen = () => {
    window.open("https://dsmhs.djsch.kr/scheduleH/list.do?m=0203&s=dsmhs");
  }

  return <_.Wrapper>
    <Box rotate>
      <h1 style={{"align-self": "flex-start"}}>시간표 ({day})</h1>
      <_.SubjDataBox>
        {
          timeTable
          ? timeTable.map((i, k) => {
            const begin = i.begin_time.split(":");
            const end = i.end_time.split(":");
            return <MapBox>
              <div id="class" key={k}>
                <h1>{i.subject_name}</h1>
                <h2>{begin[0]}:{begin[1]} ~ {end[0]}:{end[1]}</h2>
              </div>
              <img src={i.subject_image} width={40} height={40} />
            </MapBox>
          })
          : <h1>등록된 수업이 없습니다.</h1>
        }
      </_.SubjDataBox>
    </Box>
    <Box height="70px" style={{"padding": "0 20px 0 20px"}} action={handleOpen} cursor>
      <h1 style={{"font-size": "20px", "color": "#5C5960"}}>학사일정</h1>
      <img src="/imgs/svg/Url.svg" width={20} height={20} />
    </Box>
  </_.Wrapper>
}