import { routes } from "@config/routes";
import {
  SidebarSection,
  SmallSidebarLayout,
} from "@/layouts/SmallSidebarLayout";
import { CreditCardIcon } from "@/icons/CreditCardIcon";
import { BellIcon } from "@/icons/BellIcon";
import { ProfileCircleIcon } from "@/icons/ProfileCircleIcon";
import { ShieldCheckIcon } from "@/icons/ShieldCheckIcon";

const navItems: SidebarSection[] = [
  {
    title: "General",
    items: [
      {
        id: 1,
        icon: <ProfileCircleIcon />,
        label: "Profile",
        path: routes.profile(),
      },
      {
        id: 2,
        icon: <ShieldCheckIcon />,
        label: "Security",
        path: routes.security(),
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
