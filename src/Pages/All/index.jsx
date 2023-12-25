import { PageButton } from "../../Components/Common/PageButton";
import { NoticeBox } from "../../Components/All/NoticeBox";
import { DirectBox } from "../../Components/All/DirectBox";
import * as _ from "./style";

export const All = () => {
  return <>
    <_.PageButtonBox>
      <PageButton to="/points" text="상벌점 내역" icon="mdi:like-outline" />
      <PageButton to="/updates" text="업데이트 내역" icon="ic:baseline-update" />
    </_.PageButtonBox>
    <_.PageButtonBox>
      <PageButton to="/profile" text="내 프로필" icon="gg:profile" />
      <PageButton to="/notices" text="최근 공지사항" icon="ic:outline-announcement" />
    </_.PageButtonBox>
    <_.PageButtonBox>
      <NoticeBox />
      <DirectBox />
    </_.PageButtonBox>
  </>
}