import { AtIcon } from "@/icons/AtIcon";
import { BagIcon } from "@/icons/BagIcon";
import { BrandSettingsIcon } from "@/icons/BrandSettingsIcon";
import { CreditCardIcon } from "@/icons/CreditCardIcon";
import { EmailsIcon } from "@/icons/EmailIcon";
import { FileChartIcon } from "@/icons/FileChartIcon";
import { GroupIcon } from "@/icons/GroupIcon";
import { LowIcon } from "@/icons/LowIcon";
import { PhoneIcon } from "@/icons/PhoneIcon";
import { SettingsToggleIcon } from "@/icons/SettingsToggleIcon";
import { UsersIcon } from "@/icons/UsersIcon";
import { SmallSidebarLayout } from "@/layouts/SmallSidebarLayout";
import { routes } from "@config/routes";

export const BrandSettingsSidebar = () => {
  return (
    <SmallSidebarLayout
      navItems={[
        {
          id: 1,
          icon: <BrandSettingsIcon />,
          label: "General",
          path: routes.brandSettings(),
        },
        {
          id: 2,
          icon: <UsersIcon />,
          label: "Members",
          path: routes.members(),
        },
        {
          id: 3,
          icon: <BagIcon />,
          label: "Plans",
          path: routes.plans(),
        },
        {
          id: 4,
          icon: <CreditCardIcon />,
          label: "Billing",
          path: routes.brandBilling(),
        },
        {
          id: 5,
          icon: <SettingsToggleIcon />,
          label: "Integrations",
          path: routes.integrations(),
        },
        {
          id: 6,
          icon: <LowIcon />,
          label: "Legal",
          path: routes.legal(),
        },
        {
          id: 7,
          icon: <AtIcon />,
          label: "Domain",
          path: routes.domain(),
        },
        {
          id: 8,
          icon: <PhoneIcon />,
          label: "Phones",
          path: routes.phones(),
        },
        {
          id: 9,
          icon: <GroupIcon />,
          label: "Agents",
          path: routes.agents(),
        },
        {
          id: 10,
          icon: <FileChartIcon />,
          label: "Usage",
          path: routes.usage(),
          isFilled: true,
        },
        {
          id: 11,
          icon: <EmailsIcon />,
          label: "Emails",
          path: routes.emails(),
          isFilled: true,
        },
      ]}
      title="Brand Settings"
    />
  );
};
