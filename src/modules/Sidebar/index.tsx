import { BarChartIcon } from "@/icons/BarChartIcon";
import { InboxIcon } from "@/icons/InboxIcon";
import { RouteIcon } from "@/icons/RouteIcon";
import { SearchIcon } from "@/icons/SearchIcon";
import { SettingsIcon } from "@/icons/SettingsIcon";
import { TagIcon } from "@/icons/TagIcon";
import { UsersIcon } from "@/icons/UsersIcon";
import { SidebarAccordion } from "@components/Accordion/SidebarAccordion";
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
import { InviteIcon } from "@/icons/InviteIcon";
import { StoreIcon } from "@/icons/StoreIcon";

export const Sidebar = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => () => {
    navigate(path);
  };

  return (
    <Wrapper>
      <SidebarShadow />
      <SidebarContentWrapper>
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
              <InviteIcon />
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

        <NavItem onClick={handleNavigate(routes.brandSettings())}>
          <NavTextWrapper>
            <SettingsIcon />
            Brand settings
          </NavTextWrapper>
        </NavItem>
      </SidebarContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(Stack)`
  width: 272px;

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
  gap: ${({ theme }) => theme.spacing(3)};
  padding: ${({ theme }) => theme.spacing(3)};
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
  height: 32px;

  color: ${({ theme }) => theme.palette.grey[200]};
  gap: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  padding: ${({ theme }) => theme.spacing(1.5, 2)};

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

      /* border: 0.5px solid ${alpha(theme.palette.grey[300], 0.1)}; */
      box-shadow:
        0px 0px 0px 0.5px #e0e0e0,
        0px 1px 3px 0px #a6a6a633;
    `}
`;

const Chip = styled("div")`
  padding: ${({ theme }) => theme.spacing(0.75, 2)};
  border-radius: 6px;
  border: 0.5px solid ${({ theme }) => alpha(theme.palette.grey[300], 0.1)};
`;

const NavTextWrapper = styled("div")`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;
