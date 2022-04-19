import UserProfile from "./User";

import * as S from "src/components/UserDashboard/Title/index.style";

const UserProfileTitle = ({
  name,
  number,
}: {
  name: string;
  number: number;
}) => {
  return (
    <S.Container>
      <UserProfile name={name} number={number} />
    </S.Container>
  );
};

export default UserProfileTitle;
