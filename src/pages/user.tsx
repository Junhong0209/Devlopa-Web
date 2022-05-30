import type { NextPage } from "next";
import Head from "next/head";
import Layout from "src/components/common/Layout/Layout";
import withAuth from "src/core/utils/withAuth";
import styled from "@emotion/styled";
import DefaultImage from "public/assets/Default_User_Icon.svg";
import { useEffect, useState } from "react";
import { handleGetUserProfile } from "src/core/api/auth.api";
import addSchoolNumber from "src/core/utils/addSchoolNumber";
import { ErrorToast } from "src/core/lib/Toast";
import PostList from "src/core/components/Post/List";
import Loader from "src/components/common/Loading";

const User: NextPage = () => {
  const [postDatas, setPostDatas] = useState<object[]>();
  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  const getUserProfile = () => {
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
        ErrorToast(err.detail);
      });
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <>
      <Head>
        <title>유저 프로필</title>
        <meta
          name="Devlopa User Profile Page"
          content="This Page is User Profile Page"
        />
      </Head>
      <Layout>
        {loading ? (
          <LoadingContainer>
            <Loader text="로딩 중..." />
          </LoadingContainer>
        ) : (
          <>
            <Title>
              <UserWrapper>
                <ProfileImage src={DefaultImage} alt="User Icon" />
                <Text fontSize="24px">{name}</Text>
                <Text fontSize="16px" top="30px">
                  {number}
                </Text>
              </UserWrapper>
            </Title>
            <PostList
              postDatas={postDatas}
              getAllPost={null}
              getUserProfile={getUserProfile}
            />
          </>
        )}
      </Layout>
    </>
  );
};

export default withAuth(User);

const UserWrapper = styled.div`
  width: 35vw;
  margin: auto;
`;

const ProfileImage = styled.img`
  width: 50px;
  margin-right: 10px;
`;

const Text = styled.span<{ fontSize: string; top?: string }>`
  position: absolute;
  font-size: ${(props) => props.fontSize};
  top: ${(props) => (props ? props.top : 0)};
`;

const Title = styled.div`
  position: relative;
  width: 50vw;
  margin: auto;
  top: 130px;
  height: 90px;
  margin-bottom: 120px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.Gray800};
`;

const LoadingContainer = styled.div`
  text-align: center;
  padding-top: 360px;
  font-size: 48px;

  & > .loading {
    margin: auto;
    margin-bottom: 30px;
  }
`;
