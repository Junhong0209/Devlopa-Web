import PostItem from '../PostItem';
import { IPostingData } from 'src/type/index.type';

import * as S from 'src/components/Dashboard/PostList/index.style';
import { useEffect, useState } from 'react';
import { handelGetPost } from 'src/lib/api/post.api';
import { NextRouter, useRouter } from 'next/router';

const PostList = () => {
  const router: NextRouter = useRouter();
  const [postDatas, setPostdatas] = useState<IPostingData[]>();
  const code: string | string[] | undefined = router.query.code;
  
  useEffect(() => {
    if (!code) {
      handelGetPost().then(res => {
        setPostdatas(res.data.contents);
      }).catch(err => {
        console.log(err);
      });
    }
  }, [code]);

  return (
    <S.Container>
      {
        postDatas && postDatas.map((postData: IPostingData) => {
          return <PostItem key={postData.idx} data={postData} />
        })
      }
    </S.Container>
  );
};

export default PostList;