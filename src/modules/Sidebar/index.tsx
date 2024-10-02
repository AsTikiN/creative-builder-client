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
import {
  alpha,
  css,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { NavigationHeader } from "./components/NavigationHeader";
import {
  financesAccordionData,
  marketingAccordionData,
} from "./static/AccordionData";
import { FilePlusIcon } from "@/icons/FilePlusIcon";
import { Dropdown, DropdownOption } from "@components/Dropdown";
import { useState } from "react";
import { ProfileIcon } from "@/icons/ProfileIcon";
import { SwapIcon } from "@/icons/SwapIcon";
import { LifeBuoyIcon } from "@/icons/LifeBuoyIcon";
import { LogOutIcon } from "@/icons/LogOutIcon";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<DropdownOption>({
    id: 1,
    label: "Account settings",
    value: "Account settings",
  });

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
          <NavTextWrapper>
            <BarChartIcon />
            Overview
          </NavTextWrapper>
        </NavItem>

        <NavItem active={true}>
          <NavTextWrapper>
            <FilePlusIcon />
            Apps
          </NavTextWrapper>
        </NavItem>

        <NavItem>
          <NavTextWrapper>
            <TagIcon />
            Offers
          </NavTextWrapper>
        </NavItem>

        <NavItem>
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

      <BrandSettingsWrapper>
        <NavItem onClick={() => setIsOpen(true)}>
          <NavTextWrapper>
            <SettingsIcon />
            Brand settings
          </NavTextWrapper>
        </NavItem>

        <DropDownAnchor>
          <Dropdown
            isOpen={isOpen}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            options={[
              {
                id: 1,
                label: "Account settings",
                value: "Account settings",
                icon: <ProfileIcon />,
              },
              {
                id: 2,
                label: "Switch to consumer",
                value: "Switch to consumer",
                icon: <SwapIcon />,
              },
              {
                id: 3,
                label: "Help & support",
                value: "Help & support",
                icon: <LifeBuoyIcon />,
              },
              {
                id: 4,
                label: "Log out",
                value: "Log out",
                icon: <LogOutIcon />,
              },
            ]}
            setIsOpen={setIsOpen}
            dropdownWidth={205}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          ></Dropdown>
        </DropDownAnchor>
      </BrandSettingsWrapper>
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

const NavItem = styled("div")<{ active?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  color: ${({ theme }) => theme.palette.grey[200]};
  gap: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  padding: 6px 8px;

  ${({ active, theme }) =>
    active &&
    css`
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

const BrandSettingsWrapper = styled("div")`
  position: relative;
`;

const DropDownAnchor = styled("div")`
  position: absolute;
  bottom: 60px;
  left: -90px;
`;
