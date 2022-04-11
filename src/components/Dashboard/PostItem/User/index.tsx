/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import UserImage from 'public/image/Default_User_Icon.svg';
import * as S from 'src/components/Dashboard/PostItem/User/index.style';

const User = (props: any) => {
  const { username, date } = props

  return (
    <S.Container>
      <Image src={UserImage} width={36} height={36} />
      <S.Name>{username}</S.Name>
      <S.Time>{date}</S.Time>
    </S.Container>
  );
};

export default User;