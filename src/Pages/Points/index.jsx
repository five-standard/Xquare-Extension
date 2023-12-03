import { useEffect, useState } from "react";
import { PointBox } from "../../Components/PointBox";
import { Button } from "../../Components/Button";
import { pointType } from "../../Utils/Types";
import { Back } from "../../Components/Back";
import { getPoints } from "../../Api/All";
import * as _ from "./style";

export const Points = () => {
  const [item, setItem] = useState("all");
  const [points, setPoints] = useState(undefined);

  const handleClick = (e) => {
    const { className } = e.target;
    setItem(className.split(" ")[2]);
  }

  useEffect(() => {
    getPoints(pointType[item]).then(res => { // 상벌점 가져오기
      setPoints(res.data.point_histories);
    })
  }, [item]);

  return <_.Wrapper>
    <Back />
    <_.ButtonBox>
      <Button text="전체" id={item==="all" ? "selected" : ""} className="all" action={handleClick} />
      <Button text="상점" id={item==="good" ? "selected" : ""} className="good" action={handleClick} />
      <Button text="벌점" id={item==="bad" ? "selected" : ""} className="bad" action={handleClick} />
    </_.ButtonBox>
    <_.DataBox>
      {
        points && points.map((i, j) => {
          return <PointBox 
            key={j}
            data={{
              date: i.date,
              point: i.point,
              reason: i.reason,
              type: i.point_type
            }}
          />
        })
      }
    </_.DataBox>
  </_.Wrapper>
}