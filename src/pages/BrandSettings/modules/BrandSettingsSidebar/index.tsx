import { AtIcon } from "@/icons/AtIcon";
import { BagIcon } from "@/icons/BagIcon";
import { BrandSettingsIcon } from "@/icons/BrandSettingsIcon";
import { ColorPaletteIcon } from "@/icons/ColorPaletteIcon";
import { CreditCardIcon } from "@/icons/CreditCardIcon";
import { EmailsIcon } from "@/icons/EmailIcon";
import { FileChartIcon } from "@/icons/FileChartIcon";
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
          icon: <ColorPaletteIcon />,
          label: "Appearance",
          path: routes.brandAppearance(),
          isFilled: true,
        },
        {
          id: 3,
          icon: <UsersIcon />,
          label: "Team",
          path: routes.members(),
        },
        {
          id: 4,
          icon: <BagIcon />,
          label: "Plans",
          path: routes.plans(),
        },
        {
          id: 5,
          icon: <FileChartIcon />,
          label: "Usage",
          path: routes.usage(),
          isFilled: true,
        },
        {
          id: 6,
          icon: <CreditCardIcon />,
          label: "Billing",
          path: routes.brandBilling(),
        },
        {
          id: 7,
          icon: <AtIcon />,
          label: "Domain",
          path: routes.domain(),
        },
        {
          id: 8,
          icon: <EmailsIcon />,
          label: "Email",
          path: routes.email(),
          isFilled: true,
        },
        {
          id: 9,
          icon: <PhoneIcon />,
          label: "Phone",
          path: routes.phone(),
        },
        {
          id: 10,
          icon: <LowIcon />,
          label: "Legal",
          path: routes.legal(),
        },
        {
          id: 11,
          icon: <SettingsToggleIcon />,
          label: "Integrations",
          path: routes.integrations(),
        },
      ]}
      title="Brand Settings"
    />
  );
};
