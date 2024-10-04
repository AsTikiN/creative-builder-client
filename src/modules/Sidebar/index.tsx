import { BarChartIcon } from "@/icons/BarChartIcon";
import { CheckDoneIcon } from "@/icons/CheckDoneIcon";
import { InboxIcon } from "@/icons/InboxIcon";
import { RouteIcon } from "@/icons/RouteIcon";
import { SearchIcon } from "@/icons/SearchIcon";
import { SettingsIcon } from "@/icons/SettingsIcon";
import { StoreIcon } from "@/icons/StoreIcon";
import { TagIcon } from "@/icons/TagIcon";
import { UsersIcon } from "@/icons/UsersIcon";
import { SidebarAccordion } from "@components/Accordion/Accordion";
import { Input } from "@components/Input";
import { alpha, css, Stack, styled, Typography } from "@mui/material";
import { NavigationHeader } from "./components/NavigationHeader";
import {
  financesAccordionData,
  marketingAccordionData,
} from "./static/AccordionData";
import { FilePlusIcon } from "@/icons/FilePlusIcon";
import { useNavigate } from "react-router-dom";
import { routes } from "@config/routes";
import { IconButton } from "@components/IconButton";

export const Sidebar = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => () => {
    navigate(path);
  };

  return (
    <Wrapper>
      <NavigationHeader />
      <SearchWrapper>
        <Input
          slotProps={{
            input: {
              startAdornment: <SearchIcon />,
            },
          }}
          placeholder="Search"
        />
        <IconButton>
          <InboxIcon />
        </IconButton>
      </SearchWrapper>
      <Navigation>
        <NavItem>
          <NavTextWrapper>
            <BarChartIcon />
            Overview
          </NavTextWrapper>
        </NavItem>

        <NavItem
          active={location.pathname === routes.apps()}
          onClick={handleNavigate(routes.apps())}
        >
          <NavTextWrapper>
            <FilePlusIcon />
            Apps
          </NavTextWrapper>
        </NavItem>

        <NavItem
          active={location.pathname === routes.offers()}
          onClick={handleNavigate(routes.offers())}
        >
          <NavTextWrapper>
            <TagIcon />
            Offers
          </NavTextWrapper>
        </NavItem>

        <NavItem
          active={location.pathname === routes.funnels()}
          onClick={handleNavigate(routes.funnels())}
        >
          <NavTextWrapper>
            <RouteIcon />
            Funnels
          </NavTextWrapper>
        </NavItem>

        <NavItem>
          <NavTextWrapper>
            <StoreIcon />
            Store
          </NavTextWrapper>
        </NavItem>

        <SidebarAccordion {...marketingAccordionData} />

        <NavItem>
          <NavTextWrapper>
            <CheckDoneIcon />
            Orders
          </NavTextWrapper>
          <Chip>
            <Typography variant="h6" color="grey.200">
              23,345
            </Typography>
          </Chip>
        </NavItem>

        <NavItem>
          <NavTextWrapper>
            <UsersIcon />
            Audience
          </NavTextWrapper>
        </NavItem>
        <SidebarAccordion {...financesAccordionData} />
      </Navigation>

      <NavItem>
        <NavTextWrapper>
          <SettingsIcon />
          Brand settings
        </NavTextWrapper>
      </NavItem>
    </Wrapper>
  );
};

const Wrapper = styled(Stack)`
  width: 272px;
  gap: ${({ theme }) => theme.spacing(3)};
  padding: ${({ theme }) => theme.spacing(3)};
  overflow: auto;
  position: relative;
  z-index: 10;

  border-right: 1px solid ${({ theme }) => alpha(theme.palette.grey[300], 0.1)};
  box-shadow:
    -5px 0px 20px 0px rgba(0, 0, 0, 0.05),
    -2px 0px 4px 0px rgba(0, 0, 0, 0.03);
`;

const SearchWrapper = styled("div")`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
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

      svg path {
        stroke: ${theme.palette.grey[400]};
      }

      border: 0.5px solid ${alpha(theme.palette.grey[300], 0.1)};
    `}
`;

const Chip = styled("div")`
  padding: 3px 8px;
  border-radius: 6px;
  border: 0.5px solid ${({ theme }) => alpha(theme.palette.grey[300], 0.1)};
`;

const NavTextWrapper = styled("div")`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;