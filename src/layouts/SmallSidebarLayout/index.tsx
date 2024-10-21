import { alpha, Box, css, Stack, styled, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FC, ReactNode } from "react";

export interface SmallSidebarNavItem {
  id: number;
  icon: ReactNode;
  label: string;
  path: string;
  disabled?: boolean;
  isFilled?: boolean;
}

interface Props {
  navItems: SmallSidebarNavItem[];
  title: string;
}

export const SmallSidebarLayout: FC<Props> = ({ navItems, title }) => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => () => {
    navigate(path);
  };

  return (
    <Wrapper>
      <SidebarShadow />
      <SidebarContentWrapper>
        <Title>
          <Typography variant="h6" color="grey.50">
            {title}
          </Typography>
        </Title>
        <Navigation>
          {navItems.map((item) => (
            <NavItem
              key={item.path}
              active={location.pathname === item.path}
              onClick={handleNavigate(item.path)}
              isFilled={item.isFilled}
            >
              <NavTextWrapper>
                {item.icon}
                {item.label}
              </NavTextWrapper>
            </NavItem>
          ))}
        </Navigation>
      </SidebarContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(Stack)`
  width: 212px;

  position: relative;
  z-index: 10;
`;

const SidebarShadow = styled("div")`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100px;
  box-shadow:
    -5px 0px 20px 0px rgba(0, 0, 0, 0.05),
    -2px 0px 4px 0px rgba(0, 0, 0, 0.03);
  z-index: 50;
`;

const SidebarContentWrapper = styled(Stack)`
  gap: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(2)};
  overflow: auto;
  border-right: 0.5px solid ${({ theme }) => theme.palette.grey[100]};
  background-color: ${({ theme }) => theme.palette.background.primary};
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
`;

const Navigation = styled(Stack)`
  flex: 1;
  gap: ${({ theme }) => theme.spacing(1)};
`;

const NavItem = styled("div")<{ active?: boolean; isFilled?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  height: 32px;

  color: ${({ theme }) => theme.palette.grey[200]};
  gap: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  padding: ${({ theme }) => theme.spacing(1.5, 2)};
  border: 0.5px solid transparent;

  svg path {
    ${({ isFilled, theme }) =>
      isFilled &&
      css`
        fill: ${theme.palette.grey[200]};
      `}

    ${({ isFilled, theme }) =>
      !isFilled &&
      css`
        stroke: ${theme.palette.grey[200]};
      `}
  }

  ${({ active, isFilled, theme }) =>
    active &&
    css`
      color: ${theme.palette.grey[400]};
      background-color: ${theme.palette.grey[500]};

      svg path {
        ${isFilled &&
        css`
          fill: ${theme.palette.grey[400]};
        `}

        ${!isFilled &&
        css`
          stroke: ${theme.palette.grey[400]};
        `}
      }

      border: 0.5px solid ${alpha(theme.palette.grey[300], 0.1)};
    `}
`;

const NavTextWrapper = styled("div")`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1.5)};
`;

const Title = styled(Box)`
  padding: ${({ theme }) => theme.spacing(1, 2)};
`;
