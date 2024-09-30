import { DualChevronIcon } from "@/icons/DualChevronIcon";
import { alpha, Avatar, Box, css, styled } from "@mui/material";

export const NavigationHeader = () => {
  return (
    <Wrapper>
      <UserData>
        <Box>
          <Avatar variant="rounded" sizes="large" />
        </Box>

        <Box>
          <UserName>Book Lab</UserName>
          <SelectedPlan>Starter Plan</SelectedPlan>
        </Box>
      </UserData>

      <ChevronWrapper>
        <DualChevronIcon />
      </ChevronWrapper>
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  border: 0.5px solid ${({ theme }) => alpha(theme.palette.grey[300], 0.1)};

  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserData = styled("div")`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2.5)};
`;

const ChevronWrapper = styled("div")`
  height: 16px;
`;

const UserName = styled("div")`
  ${({ theme }) => css`
    ${theme.typography.titleSmall}
  `}

  color: ${({ theme }) => theme.palette.grey[400]};
`;

const SelectedPlan = styled("div")`
  ${({ theme }) => css`
    ${theme.typography.body3}
  `}

  color: ${({ theme }) => theme.palette.grey[200]};
`;
