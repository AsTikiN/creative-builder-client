import { DualChevronIcon } from "@/icons/DualChevronIcon";
import { Avatar, styled } from "@mui/material";

export const NavigationHeader = () => {
  return (
    <Wrapper>
      <UserData>
        <AvatarWrapper>
          <Avatar variant="rounded" sizes="large" />
        </AvatarWrapper>
        <UserInfo>
          <UserName>Book Lab</UserName>
          <SelectedPlan>Starter Plan</SelectedPlan>
        </UserInfo>
      </UserData>

      <ChevronWrapper>
        <DualChevronIcon />
      </ChevronWrapper>
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  border-radius: 8px;
  border: 0.5px solid rgba(36, 36, 36, 0.1);
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserData = styled("div")`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const AvatarWrapper = styled("div")``;

const ChevronWrapper = styled("div")`
  height: 16px;
`;

const UserInfo = styled("div")``;

const UserName = styled("div")`
  color: #0d0d0d;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
`;

const SelectedPlan = styled("div")`
  color: #5c5c5c;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
`;
