import PostItem from "./Item";
import styled from "@emotion/styled";

interface Props {
  postDatas: any;
  getAllPost: any | null;
  getUserProfile: any | null;
}

const PostList = ({
  postDatas,
  getAllPost,
  getUserProfile,
}: Props): JSX.Element => {
  return (
    <Wrapper>
      {postDatas.length !== 0 ? (
        postDatas &&
        postDatas.map((postData: any) => {
          return (
            <PostItem
              key={postData.idx}
              data={postData}
              getAllPost={getAllPost}
              getUserProfile={getUserProfile}
            />
          );
        })
      ) : (
        <div id="nothing-posting">게시글이 없습니다.</div>
      )}
    </Wrapper>
  );
};

export default PostList;

const Wrapper = styled.div`
  width: 36.495%;
  height: auto;
  margin: auto;
  padding-top: 50px;
  padding-bottom: 100px;

  & > #nothing-posting {
    font-family: Pretendard;
    font-weight: 600;
    text-align: center;
    font-size: 24px;
  }
`;
