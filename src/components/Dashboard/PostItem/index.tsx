import dynamic from "next/dynamic";
import Image from "next/image";

import User from "./User";
import Edit from "public/image/Edit.svg";
import Delete from "public/image/Delete.svg";

import { IPostingData } from "src/type/index.type";

import * as S from "src/components/Dashboard/PostItem/index.style";

const Viewer = dynamic(
  () => import("src/components/Dashboard/PostViewer/index"),
  { ssr: false }
);

const PostItem = ({ data }: { data: IPostingData }) => {
  return (
    <S.Container>
      <User username={data.user_name} date={data.write_time} />
      <S.ImageGroup>
        <Image
          src={Edit}
          width="25"
          height="25"
          alt="수정 이미지"
          onClick={() => {
            alert("수정 버튼 클릭!");
          }}
        />
        <Image
          src={Delete}
          width="25"
          height="25"
          alt="삭제 이미지"
          onClick={() => {
            alert("삭제 버튼 클릭!");
          }}
        />
      </S.ImageGroup>
      <Viewer text={data.content} />
    </S.Container>
  );
};

export default PostItem;
