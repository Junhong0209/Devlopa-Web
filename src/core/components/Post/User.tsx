import Image from "next/image";
import UserImage from "public/assets/Default_User_Icon.svg";
import styled from "@emotion/styled";
import { memo } from "react";

interface Props {
  username: string;
  date: string;
}

const User = ({ username, date }: Props): JSX.Element => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={UserImage} width={36} height={36} alt="User Icon" />
      </ImageWrapper>
      <Name>{username}</Name>
      <Time>{date}</Time>
    </Wrapper>
  );
};

export default memo(User);

const Wrapper = styled.div`
  display: flex;
  width: auto;
  padding-top: 20px;
  margin-left: 1.2rem;
  margin-bottom: 1.2rem;
`;

const ImageWrapper = styled.div`
  display: flex;
  box-sizing: content-box;
  cursor: pointer;
`;

const Name = styled.span`
  display: flex;
  margin-left: 1rem;
  font-family: Pretendard;
  font-weight: 700;
  font-size: 17px;
  color: ${({ theme }) => theme.colors.Black600};
  z-index: 1;
  cursor: pointer;
`;

const Time = styled.span`
  display: flex;
  padding-top: 1.4rem;
  margin-left: -2.7rem;
  font-family: Pretendard;
  font-weight: 500;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.Gray600};
`;
