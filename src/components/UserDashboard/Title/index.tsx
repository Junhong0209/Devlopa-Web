import UserProfile from "./User";

import * as S from "src/components/UserDashboard/Title/index.style";

interface Props {
  name: string;
  number: number;
}

const UserProfileTitle = ({ name, number }: Props) => {
  return (
    <S.Container>
      <UserProfile name={name} number={number} />
    </S.Container>
  );
};

export default UserProfileTitle;
