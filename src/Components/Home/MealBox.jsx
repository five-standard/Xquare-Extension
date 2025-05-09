import { memo, useState } from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { Icon } from "@iconify/react";
import { Dates, lastDay, messages, year_month } from "../../Utils/Utilities";
import { dayType, mealType } from "../../Utils/Types";
import { getTodayMeals } from "../../Api/Meal";
import { Box as Component } from "../Box";
import { Title } from "../Common/Title";

export const MealBox = memo(() => {
  const [date, setDate] = useState(Dates.getDate());
  const day = dayType[new Date(year_month(date)).getDay()];

  const { data } = useQuery(["meals", [date]], () => getTodayMeals(date), {
    onError: () => toast.error(<b>{messages.meal}</b>),
    select: (data) => {
      return Object.entries(data?.data?.meals[0]);
    },
  });

  console.log(data);

  const handlePrevMeal = () => {
    if (date > 1) setDate((prev) => prev - 1);
  };

  const handleTodayMeal = () => {
    setDate(Dates.getDate());
  };

  const handleNextMeal = () => {
    if (date < lastDay) setDate((prev) => prev + 1);
  };

  return (
    <Component $rotate>
      <TopBox>
        <Title>
          {year_month(date)} ({day})
        </Title>
        <div>
          <DateButton
            icon="mingcute:up-fill"
            color="#5C5960"
            width="20px"
            onClick={handleNextMeal}
          />
          <h4 onClick={handleTodayMeal}>today</h4>
          <DateButton
            icon="mingcute:down-fill"
            color="#5C5960"
            width="20px"
            onClick={handlePrevMeal}
          />
        </div>
      </TopBox>
      <BottomBox>
        {data ? (
          data?.map(([k, v], i) => {
            console.log(v);
            return (
              <Component $inner $rotate key={i}>
                <TitleBox>
                  <h1>{mealType[k]}</h1>
                </TitleBox>
                <h2 style={{ width: "90%" }}>
                  {v
                    ? v[0]
                        ?.split("||")
                        ?.filter((i) => i !== "")
                        .join(", ")
                    : "등록된 급식이 없습니다"}
                </h2>
              </Component>
            );
          })
        ) : (
          <h2>급식을 불러오고 있습니다</h2>
        )}
      </BottomBox>
    </Component>
  );
});

const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  & > div {
    gap: 5px;
    display: flex;
    align-items: center;
  }
  & h4 {
    cursor: pointer;
    color: #5c5960;
    font-size: 12px;
  }
`;

const BottomBox = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  border-radius: 15px;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const DateButton = styled(Icon)`
  cursor: pointer;
`;
