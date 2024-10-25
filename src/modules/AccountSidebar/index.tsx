import { routes } from "@config/routes";
import {
  SmallSidebarLayout,
  SmallSidebarNavItem,
} from "@/layouts/SmallSidebarLayout";
import { CreditCardIcon } from "@/icons/CreditCardIcon";
import { BellIcon } from "@/icons/BellIcon";
import { ProfileCircleIcon } from "@/icons/ProfileCircleIcon";
import { UnblurIcon } from "@/icons/UnblurIcon";
import { Stack, styled } from "@mui/material";

const UnblurWrapper = styled(Stack)`
  svg path {
    fill: #5c5c5c !important;
    stroke: transparent !important;

    &:last-child {
      fill: transparent !important;
      stroke: #5c5c5c !important;
    }
  }
`;

const navItems: SmallSidebarNavItem[] = [
  {
    id: 1,
    icon: <ProfileCircleIcon />,
    label: "Profile",
    path: routes.accountSettings(),
  },
  {
    id: 2,
    icon: (
      // <UnblurWrapper>
      <UnblurIcon />
      // </UnblurWrapper>
    ),
    label: "Theme",
    path: routes.accountAppearance(),
  },
  {
    id: 3,
    icon: <CreditCardIcon />,
    label: "Billing",
    path: routes.accountBilling(),
    disabled: true,
  },
  {
    id: 4,
    icon: <BellIcon />,
    label: "Notifications",
    path: routes.notifications(),
  },
];

export const AccountSidebar = () => {
  return <SmallSidebarLayout navItems={navItems} title="Account Settings" />;
};
