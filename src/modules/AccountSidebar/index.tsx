import { routes } from "@config/routes";
import {
  SidebarSection,
  SmallSidebarLayout,
} from "@/layouts/SmallSidebarLayout";
import { CreditCardIcon } from "@/icons/CreditCardIcon";
import { BellIcon } from "@/icons/BellIcon";
import { ProfileCircleIcon } from "@/icons/ProfileCircleIcon";
import { RgbIcon } from "@/icons/RgbIcon";

const navItems: SidebarSection[] = [
  {
    title: "General",
    items: [
      {
        id: 1,
        icon: <ProfileCircleIcon />,
        label: "Profile",
        path: routes.accountSettings(),
      },
      {
        id: 2,
        icon: <RgbIcon />,
        label: "Theme",
        path: routes.accountAppearance(),
      },
      {
        id: 3,
        icon: <BellIcon />,
        label: "Notifications",
        path: routes.notifications(),
      },
    ],
  },
  {
    title: "Finance",
    items: [
      {
        id: 4,
        icon: <CreditCardIcon />,
        label: "Billing",
        path: routes.accountBilling(),
        disabled: true,
      },
    ],
  },
];

export const AccountSidebar = () => {
  return <SmallSidebarLayout navItems={navItems} />;
};
