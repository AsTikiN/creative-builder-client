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
import { alpha, IconButton, Stack, styled } from "@mui/material";
import { NavigationHeader } from "./components/NavigationHeader";
import {
  financesAccordionData,
  marketingAccordionData,
} from "./static/AccordionData";

export const Sidebar = () => {
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
        <IconButtonWrapper>
          <InboxIcon />
        </IconButtonWrapper>
      </SearchWrapper>
      <Navigation>
        <NavItem>
          <BarChartIcon />
          Overview
        </NavItem>

        <NavItem>
          <TagIcon />
          Offers
        </NavItem>

        <NavItem>
          <RouteIcon />
          Funnels
        </NavItem>

        <NavItem>
          <StoreIcon />
          Store
        </NavItem>

        <SidebarAccordion {...marketingAccordionData} />

        <NavItem>
          <CheckDoneIcon />
          Orders
        </NavItem>

        <NavItem>
          <UsersIcon />
          Audience
        </NavItem>
        <SidebarAccordion {...financesAccordionData} />
      </Navigation>
      <NavItem>
        <SettingsIcon />
        Brand settings
      </NavItem>
    </Wrapper>
  );
};

const Wrapper = styled(Stack)`
  width: 272px;
  gap: ${({ theme }) => theme.spacing(3)};
  padding: ${({ theme }) => theme.spacing(3)};

  border-right: 1px solid ${({ theme }) => alpha(theme.palette.grey[300], 0.1)};
`;

const SearchWrapper = styled("div")`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
`;

const Navigation = styled(Stack)`
  flex: 1;
  gap: ${({ theme }) => theme.spacing(1)};
`;

const IconButtonWrapper = styled(IconButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;

  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  border: 0.5px solid ${({ theme }) => alpha(theme.palette.grey[300], 0.1)};
`;

const NavItem = styled("div")`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.palette.grey[200]};
  gap: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  padding: 6px 8px;
`;
