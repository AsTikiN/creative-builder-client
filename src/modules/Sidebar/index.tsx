import { BarChartIcon } from "@/icons/BarChartIcon";
import { CheckDoneIcon } from "@/icons/CheckDoneIcon";
import { CoinsIcon } from "@/icons/CoinsIcon";
import { InboxIcon } from "@/icons/InboxIcon";
import { RouteIcon } from "@/icons/RouteIcon";
import { SearchIcon } from "@/icons/SearchIcon";
import { SendIcon } from "@/icons/SendIcon";
import { SettingsIcon } from "@/icons/SettingsIcon";
import { StoreIcon } from "@/icons/StoreIcon";
import { TagIcon } from "@/icons/TagIcon";
import { UsersIcon } from "@/icons/UsersIcon";
import {
  SidebarAccordion,
  SidebarAccordionProps,
} from "@components/Accordion/Accordion";
import { Input } from "@components/Input";
import { styled } from "@mui/material";
import { NavigationHeader } from "./components/NavigationHeader";

const mockAccordionData: SidebarAccordionProps[] = [
  {
    title: "Marketing",
    icon: <SendIcon />,
    tabs: [
      { id: 1, label: "Email" },
      { id: 2, label: "SMS" },
      { id: 3, label: "Messages" },
      { id: 4, label: "Discounts" },
      { id: 5, label: "Affiliates" },
    ],
  },
  {
    title: "Finances",
    icon: <CoinsIcon />,
    tabs: [
      { id: 1, label: "Transactions" },
      { id: 2, label: "Payouts" },
      { id: 3, label: "Disputes" },
    ],
  },
];

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
        <IconButton>
          <InboxIcon />
        </IconButton>
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

        <SidebarAccordion {...mockAccordionData[0]} />

        <NavItem>
          <CheckDoneIcon />
          Orders
        </NavItem>

        <NavItem>
          <UsersIcon />
          Audience
        </NavItem>
        <SidebarAccordion {...mockAccordionData[1]} />
      </Navigation>
      <NavItem>
        <SettingsIcon />
        Brand settings
      </NavItem>
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  width: 272px;

  //TODO: move to theme
  gap: 12px;
  padding: 12px;
  border-right: 1px solid rgba(36, 36, 36, 0.1);
`;

const SearchWrapper = styled("div")`
  display: flex;

  //TODO: move to theme
  gap: 12px;
`;

const Navigation = styled("div")`
  display: flex;
  flex-direction: column;
  flex: 1;
  //TODO: move to theme
  gap: 4px;
`;

const IconButton = styled("button")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  //TODO: move to theme
  border-radius: 8px;
  border: 0.5px solid rgba(36, 36, 36, 0.1);
  background-color: #fff;
`;

const NavItem = styled("div")`
  display: flex;
  align-items: center;
  //TODO: move to theme
  color: #5c5c5c;
  gap: 8px;
  border-radius: 8px;
  padding: 6px 8px;
`;
