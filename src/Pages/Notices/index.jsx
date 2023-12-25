import { useQuery } from "react-query";
import { styled } from "styled-components";
import { getNotices } from "../../Api/All";
import { toast } from "react-toastify";
import { messages } from "../../Utils/Utilities";
import { Box } from "../../Components/Box";
import { Profile } from "../../Components/Common/Profile";
import Default from "../../Assets/imgs/Default.svg";

export const Notices = () => {
	
  const { data } = useQuery(["notices"], getNotices, {
		onerror: () => toast.error(<b>{messages.Notices}</b>),
		select: (data) => {
			return data.data.feeds;
		}
	})

	return <Component>
		{
			data?.map((i, j) => {
				return <Box style={{gap: "7px"}} $rotate>
					<Profile
						profile={i && {
							img: i.profile ? i.profile : Default,
							name: i.name,
							sub: i.created_at.split("T")[0],
						}}
						key={j}
					/>
					<Data>
						{i.content}
					</Data>
				</Box>
			})
		}	
	</Component>
}

const Component = styled.div`
	gap: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	overflow-y: scroll;
`

const Data = styled.h2`
	width: 100%;
	height: 100%;
  word-break: break-all;
  white-space: pre-wrap;
`