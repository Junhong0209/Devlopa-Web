import PostList from "../Dashboard/PostList";
import addSchoolNumber from "src/utils/addSchoolNumber";
import UserProfileTitle from "./Title";
import ReactLoading from "react-loading";

import { useEffect, useState } from "react";
import { handleGetUserProfile } from "src/api/auth.api";

import * as S from "src/components/UserDashboard/index.style";

const UserDashboard = (): JSX.Element => {
  const [postDatas, setPostDatas] = useState<object[]>();
  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<any>();

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    handleGetUserProfile()
      .then((res) => {
        setPostDatas(res.data.contents);
        setName(res.data.user_profile.user_name);
        setNumber(
          addSchoolNumber(
            String(res.data.user_profile.grade),
            String(res.data.user_profile.room),
            String(res.data.user_profile.number)
          )
        );
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {loading ? (
        <S.LoadingContainer>
          <ReactLoading type="spin" color="#36383C" className="loading" />
          로딩 중...
        </S.LoadingContainer>
      ) : (
        <>
          <S.Container>
            <UserProfileTitle name={name} number={number} />
          </S.Container>
          <PostList postDatas={postDatas} />
        </>
      )}
    </>
  );
};

export default UserDashboard;
