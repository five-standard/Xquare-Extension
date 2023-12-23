import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { getUserProfile, getUserSimple } from "../../Api/User";
import { Dates, messages } from "../../Utils/Utilities";
import Default from "../../Assets/imgs/Default.svg";
import * as _ from "./style";

export const Profile = () => {
	const types = ["년", "월", "일"];
  const { data } = useQuery(["profile"], getUserProfile, {
    onError: () => toast.error(<b>{messages.user}</b>),
    select: (result) => {
			const { data } = result;
			return {
				name: data.name,
				account_id: data.account_id,
				birth_day: data.birth_day.split("-").map((i, j) => `${i}${types[j]}`).join(" "),
				enterDate: ((Dates.getFullYear() - ((Dates.getFullYear() - data.birth_day.split("-")[0]) - 16)) - 2015) + 1 + "기",
				number: `${data.grade}학년 ${data.class_num}반 ${data.num}번`,
				profile_file_name: data.profile_file_name !== "" ? data.profile_file_name : Default
			};
		}
  })
	const { data: points } = useQuery(["points"], getUserSimple, {
		onError: () => toast.error(<b>{messages.points}</b>),
		select: (result) => {
			const { data } = result;
			return Object.values(data).filter(i => typeof i === "number");
		}
	})

	/*
		기수 구하는 공식
		1. i = 현재 연도 - 생일 연도 (나이 구하기)
		2. J = i - 16 (고1이 된지 얼마나 지났는지 구하기)
		3. k = 현재 연도 - j (학교에 언제 입학했는지 구하기)
		4. result = k-2015 (기수 구하기)
	*/

	const calcPoint = (data) => {
		return data[0] - data[1];
	}

  return <_.Wrapper>
		<_.Data>
			<_.Img src={data?.profile_file_name} alt="" />
			<h1 style={{fontSize: "20px"}}>{data?.name}</h1>
		</_.Data>
		<_.Data>
			<div>
				<h2>아이디</h2>
				<h1>{data?.account_id}</h1>
			</div>
			<div>
				<h2>생년월일</h2>
				<h1>{data?.birth_day} ({data?.enterDate})</h1>
			</div>
			<div>
				<h2>학번</h2>
				<h1>{data?.number}</h1>
			</div>
			<div>
				<h2>상/벌점</h2>
				<h1>{points && `${points[0]}점/${points[1]}점 (총합 ${calcPoint(points)}점)`}</h1>
			</div>
		</_.Data>
  </_.Wrapper>
}