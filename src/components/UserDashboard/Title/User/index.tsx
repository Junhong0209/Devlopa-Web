import DefaultImage from 'public/image/Default_User_Icon.svg';

import * as S from 'src/components/UserDashboard/Title/User/index.style';

const UserProfile = () => {
  return (
    <S.Container>
      <S.ProfileImage src={DefaultImage} />
      <S.Number>3206</S.Number>
      <S.Name>박준홍</S.Name>
    </S.Container>
  );
};

export default UserProfile;