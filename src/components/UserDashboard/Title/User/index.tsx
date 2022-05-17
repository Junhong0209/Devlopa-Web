import DefaultImage from "public/assets/Default_User_Icon.svg";

import * as S from "src/components/UserDashboard/Title/User/index.style";

interface Props {
  name: string;
  number: number;
}

const UserProfile = ({ name, number }: Props): JSX.Element => {
  return (
    <S.Container>
      <S.ProfileImage src={DefaultImage} alt="User Icon" />
      <S.Number>{number}</S.Number>
      <S.Name>{name}</S.Name>
    </S.Container>
  );
};

export default UserProfile;
