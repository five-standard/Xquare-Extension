import { PageButton } from "../../Components/Common/PageButton";
import { NoticeBox } from "../../Components/All/NoticeBox";
import { DirectBox } from "../../Components/All/DirectBox";
import * as _ from "./style";
import { toast } from "react-toastify";

export const All = () => {
  const handleClick = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    toast.success("완료되었습니다. 앱을 재시작해주세요");
  };

  return (
    <>
      <_.PageButtonBox>
        <PageButton to="/points" text="상벌점 내역" icon="mdi:like-outline" />
        <PageButton
          to="/updates"
          text="업데이트 내역"
          icon="ic:baseline-update"
        />
      </_.PageButtonBox>
      <_.PageButtonBox>
        <PageButton to="/profile" text="내 프로필" icon="gg:profile" />
        <PageButton
          to="/notices"
          text="최근 공지사항"
          icon="ic:outline-announcement"
        />
      </_.PageButtonBox>
      <_.PageButtonBox>
        <NoticeBox />
        <_.ColumnBox>
          <_.ErrorButton onClick={handleClick}>
            <_.Text>오류 해결하기</_.Text>
          </_.ErrorButton>
          <DirectBox />
        </_.ColumnBox>
      </_.PageButtonBox>
    </>
  );
};
