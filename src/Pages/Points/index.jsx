import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { useState } from "react";
import { PointBox } from "../../Components/Points/PointBox";
import { Button } from "../../Components/Button";
import { messages } from "../../Utils/Utilities";
import { pointType } from "../../Utils/Types";
import { getPoints } from "../../Api/All";
import * as _ from "./style";

export const Points = () => {
  const [item, setItem] = useState("all");

  const handleClick = (e) => {
    const { className } = e.target;
    setItem(className.split(" ")[2]);
  }

  const { data } = useQuery(["points", item], () => getPoints(pointType[item]), {
    onError: () => toast.error(<b>{messages.points}</b>),
    select: (data) => {
      return data.data.point_histories;
    }
  })

  return <>
    <_.ButtonBox>
      <Button text="전체" id={item==="all" ? "selected" : ""} className="all" action={handleClick} />
      <Button text="상점" id={item==="good" ? "selected" : ""} className="good" action={handleClick} />
      <Button text="벌점" id={item==="bad" ? "selected" : ""} className="bad" action={handleClick} />
    </_.ButtonBox>
    <_.DataBox>
      {
        data?.map((i, j) => {
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
  </>
}