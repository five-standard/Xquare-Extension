/*global chrome*/
import styled from "styled-components"
import { Box } from "../../components/Box"
import { useEffect, useState } from "react"
import { getTimeTable } from "../../Api/TimeTable";
import { useRecoilValue } from "recoil";
import { token } from "../../Utils/Atoms";

export const TimeTable = () => {
  const [timeTable, setTimeTable] = useState([]);
  const accessToken = useRecoilValue(token);
  const date = new Date();
  const days = ["일", "월", "화", "수", "목", "금", "토"];

  useEffect(() => {
    getTimeTable(accessToken).then(res => {
      setTimeTable(res.data.week_timetable);
    });
  }, [accessToken])

  return <Wrapper>
    <Box style={{"align-items": "center", "flex-direction": "column"}}>
      <h1 style={{"align-self": "flex-start"}}>시간표 ({days[date.getDay()]})</h1>
      <SubjDataBox>
        {
          date.getDay() !== 0 && date.getDay() !== 6 && timeTable[date.getDay()-1]
          ? timeTable[date.getDay()-1].day_timetable.map((i, k) => {
            const begin = i.begin_time.split(":");
            const end = i.end_time.split(":");
            return <SubjectBox>
              <div id="class" key={k}>
                <h1>{i.subject_name}</h1>
                <h2>{begin[0]}:{begin[1]} ~ {end[0]}:{end[1]}</h2>
              </div>
              <img src={i.subject_image} alt="" width={40} height={40} />
            </SubjectBox>
          })
          : <h1>등록된 수업이 없습니다.</h1>
        }
      </SubjDataBox>
    </Box>
    <Box height="70px" style={{"justify-content": "space-between", "cursor": "pointer", "padding-right": "20px", "padding-left": "20px"}} action={() => window.open("https://dsmhs.djsch.kr/scheduleH/list.do?m=0203&s=dsmhs")}>
      <h1 style={{"font-size": "20px", "color": "#5C5960"}}>학사일정</h1>
      <img src="/imgs/svg/Url.svg" width={20} height={20} />
    </Box>
  </Wrapper>
}

const Wrapper = styled.div`
  gap: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SubjectBox = styled.div`
  gap: 5px;
  width: 100%;
  min-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  background: #F9F7FA;
  border-radius: 15px;
  & > div#class {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  & > h2 {
    width: 30%;
  }
`

const SubjDataBox = styled.div`
  width: 100%;
  max-height: 250px;
  border-radius: 15px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`