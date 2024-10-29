import { AtIcon } from "@/icons/AtIcon";
import { BagIcon } from "@/icons/BagIcon";
import { BrandSettingsIcon } from "@/icons/BrandSettingsIcon";
import { ColorPaletteIcon } from "@/icons/ColorPaletteIcon";
import { CompassIcon } from "@/icons/CompassIcon";
import { CreditCardIcon } from "@/icons/CreditCardIcon";
import { FileChartIcon } from "@/icons/FileChartIcon";
import { LiveIcon } from "@/icons/LiveIcon";
import { LowIcon } from "@/icons/LowIcon";
import { NotepadIcon } from "@/icons/NotepadIcon";
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
          title: "General",
          items: [
            {
              id: 1,
              icon: <BrandSettingsIcon />,
              label: "Details",
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
              icon: <LowIcon />,
              label: "Legal",
              path: routes.legal(),
            },
          ],
        },
        {
          title: "Team & Plans",
          items: [
            {
              id: 5,
              icon: <BagIcon />,
              label: "Plans",
              path: routes.plans(),
            },
            {
              id: 6,
              icon: <FileChartIcon />,
              label: "Usage",
              path: routes.usage(),
              isFilled: true,
            },
            {
              id: 7,
              icon: <CreditCardIcon />,
              label: "Billing",
              path: routes.brandBilling(),
            },
          ],
        },
        {
          title: "Communication",
          items: [
            {
              id: 7,
              icon: <CompassIcon />,
              label: "Domain",
              path: routes.domain(),
            },
            {
              id: 8,
              icon: <AtIcon />,
              label: "Email",
              path: routes.email(),
            },
            {
              id: 9,
              icon: <PhoneIcon />,
              label: "Phone",
              path: routes.phone(),
            },
          ],
        },
        {
          title: "Advanced",
          items: [
            {
              id: 11,
              icon: <LiveIcon />,
              label: "Webhooks",
              path: routes.webhooks(),
            },
            {
              id: 12,
              icon: <SettingsToggleIcon />,
              label: "Integrations",
              path: routes.integrations(),
            },
            {
              id: 13,
              icon: <NotepadIcon />,
              label: "Logs",
              path: routes.notepad(),
            },
          ],
        },
      ]}
    />
  );
};
