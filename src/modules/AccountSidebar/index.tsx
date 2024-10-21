import { routes } from "@config/routes";
import { UserEditIcon } from "@/icons/UserEditIcon";
import {
  SmallSidebarLayout,
  SmallSidebarNavItem,
} from "@/layouts/SmallSidebarLayout";
import { LightBulbIcon } from "@/icons/LightBulbIcon";
import { CreditCardIcon } from "@/icons/CreditCardIcon";
import { BellIcon } from "@/icons/BellIcon";

const navItems: SmallSidebarNavItem[] = [
  {
    id: 1,
    icon: <UserEditIcon />,
    label: "Profile",
    path: routes.accountSettings(),
  },
  {
    id: 2,
    icon: <LightBulbIcon />,
    label: "Appearance",
    path: routes.appearance(),
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
