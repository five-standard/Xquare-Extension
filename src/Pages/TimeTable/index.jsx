import { useRecoilValue } from "recoil";
import { toast } from "react-toastify";
import { useQuery } from "react-query";
import { messages, day, today } from "../../Utils/Utilities";
import { Icon as IconElement } from "@iconify/react";
import { getTimeTable } from "../../Api/TimeTable";
import { MapBox } from "../../Components/MapBox";
import { updator } from "../../Utils/Atoms";
import { Box } from "../../Components/Box";
import * as _ from "./style";

export const TimeTable = () => {
  const update = useRecoilValue(updator);

  const { data } = useQuery(["timeTable", update], getTimeTable, {
    onError: () => toast.error(<b>{messages.timetable}</b>)
  })
  
  const handleOpen = () => {
    window.open("https://dsmhs.djsch.kr/scheduleH/list.do?m=0203&s=dsmhs");
  }

  return <_.Wrapper>
    <Box $rotate>
      <h1 style={{alignSelf: "start"}}>시간표 ({day})</h1>
      <_.SubjDataBox>
        {
          data?.data.week_timetable.filter(i => i.date === today)[0]
          ? data.data.week_timetable.filter(i => i.date === today)[0].day_timetable.map((i, j) => {
            const begin = i.begin_time.split(":");
            const end = i.end_time.split(":");
            return <MapBox key={j}>
              <div id="class">
                <h1>{i.subject_name}</h1>
                <h2>{begin[0]}:{begin[1]} ~ {end[0]}:{end[1]}</h2>
              </div>
              <img src={i.subject_image} width={40} height={40} alt="" />
            </MapBox>
          })
          : <h2>등록된 수업이 없습니다.</h2>
        }
      </_.SubjDataBox>
    </Box>
    <Box height="70px" style={{padding: "0 20px 0 20px"}} action={handleOpen} $cursor>
      <h1 style={{fontSize: "20px", color: "#5C5960"}}>학사일정</h1>
      <IconElement icon="ph:link-bold" color="#5C5960" width="25px" />
    </Box>
  </_.Wrapper>
}