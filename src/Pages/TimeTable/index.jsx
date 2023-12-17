import { useRecoilValue } from "recoil";
import { toast } from "react-toastify";
import { useQuery } from "react-query";
import { messages, day, today } from "../../Utils/Utilities";
import { Title } from "../../Components/Common/Title";
import { getTimeTable } from "../../Api/TimeTable";
import { updator } from "../../Utils/Atoms";
import { Box } from "../../Components/Box";
import * as _ from "./style";

export const TimeTable = () => {
  const update = useRecoilValue(updator);

  const { data } = useQuery(["timeTable", update], getTimeTable, {
    onError: () => toast.error(<b>{messages.timetable}</b>),
    select: (data) => {
      const { week_timetable } = data.data;
      return week_timetable.filter(i => i.date === today)[0]?.day_timetable;
    }
  });

  return <>
    <Box $rotate>
      <Title>시간표 ({day})</Title>
      <_.SubjDataBox>
        {
          data
          ? data.map((i, j) => {
            const begin = i.begin_time.split(":");
            const end = i.end_time.split(":");
            return <Box $inner key={j}>
              <div>
                <h1>{i.subject_name}</h1>
                <h2>{begin[0]}:{begin[1]} ~ {end[0]}:{end[1]}</h2>
              </div>
              <img src={i.subject_image} alt="" />
            </Box>
          })
          : <h2>등록된 수업이 없습니다.</h2>
        }
      </_.SubjDataBox>
    </Box>
  </>
}