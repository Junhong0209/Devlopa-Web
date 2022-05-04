/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import UserImage from "public/image/Default_User_Icon.svg";
import * as S from "src/components/Dashboard/PostItem/User/index.style";

interface Props {
  username: string;
  date: string;
}

const User = ({ username, date }: Props): JSX.Element => {
  return (
    <S.Container>
      <S.ImageWrapper>
        <Image
          src={UserImage}
          width={36}
          height={36}
          onClick={() => {
            // Todo
          }}
        />
      </S.ImageWrapper>
      <S.Name
        onClick={() => {
          // Todo
        }}
      >
        {username}
      </S.Name>
      <S.Time>{date}</S.Time>
    </S.Container>
  );
};

export default User;
