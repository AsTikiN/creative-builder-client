import { alpha, Box, css, Stack, styled, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routes } from "@config/routes";
import { UserEditIcon } from "@/icons/UserEditIcon";
import { LightBulbIcon } from "@/icons/LightBulbIcon";
import { CreditCardIcon } from "@/icons/CreditCardIcon";
import { BellIcon } from "@/icons/BellIcon";

export const AccountSidebar = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => () => {
    navigate(path);
  };

  return (
    <Wrapper>
      <Title>
        <Typography variant="h6" color="grey.50">
          Account Settings
        </Typography>
      </Title>
      <Navigation>
        <NavItem
          active={location.pathname === routes.accountSettings()}
          onClick={handleNavigate(routes.accountSettings())}
        >
          <NavTextWrapper>
            <UserEditIcon />
            Profile
          </NavTextWrapper>
        </NavItem>

        <NavItem
          active={location.pathname === routes.appearance()}
          onClick={handleNavigate(routes.appearance())}
        >
          <NavTextWrapper>
            <LightBulbIcon />
            Appearance
          </NavTextWrapper>
        </NavItem>

        <NavItem>
          <NavTextWrapper>
            <CreditCardIcon />
            Billing
          </NavTextWrapper>
        </NavItem>

        <NavItem>
          <NavTextWrapper>
            <BellIcon />
            Notifications
          </NavTextWrapper>
        </NavItem>
      </Navigation>
    </Wrapper>
  );
};

const Wrapper = styled(Stack)`
  width: 212px;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(2)};
  overflow: auto;
  position: relative;
  z-index: 10;

  border-right: 1px solid ${({ theme }) => alpha(theme.palette.grey[300], 0.1)};
  box-shadow:
    -5px 0px 20px 0px rgba(0, 0, 0, 0.05),
    -2px 0px 4px 0px rgba(0, 0, 0, 0.03);
`;

const Navigation = styled(Stack)`
  flex: 1;
  gap: ${({ theme }) => theme.spacing(1)};
`;

const NavItem = styled("div")<{ active?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  height: 32px;

  color: ${({ theme }) => theme.palette.grey[200]};
  gap: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  padding: 6px 8px;
  border: 0.5px solid transparent;

  svg path {
    stroke: ${({ theme }) => theme.palette.grey[200]};
  }

  ${({ active, theme }) =>
    active &&
    css`
      color: ${theme.palette.grey[400]};
      background-color: ${theme.palette.grey[500]};

      svg path {
        stroke: ${theme.palette.grey[400]};
      }

      border: 0.5px solid ${alpha(theme.palette.grey[300], 0.1)};
    `}
`;

const NavTextWrapper = styled("div")`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const Title = styled(Box)`
  padding: 4px 8px;
`;
