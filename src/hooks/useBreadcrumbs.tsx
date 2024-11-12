import { BagIcon } from "@/icons/BagIcon";
import { BellIcon } from "@/icons/BellIcon";
import { BrandSettingsIcon } from "@/icons/BrandSettingsIcon";
import { ColorPaletteIcon } from "@/icons/ColorPaletteIcon";
import { CreditCardIcon } from "@/icons/CreditCardIcon";
import { FilePlusIcon } from "@/icons/FilePlusIcon";
import { FocusAutoIcon } from "@/icons/FocusAutoIcon";
import { LiveIcon } from "@/icons/LiveIcon";
import { NotepadIcon } from "@/icons/NotepadIcon";
import { SettingsToggleIcon } from "@/icons/SettingsToggleIcon";
import { ShieldCheckIcon } from "@/icons/ShieldCheckIcon";
import { UsersIcon } from "@/icons/UsersIcon";
import { routes, SubRoutes } from "@config/routes";
import { Stack, styled, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const getIcon = (path: string) => {
  return {
    [SubRoutes.profile]: <UsersIcon />,
    [SubRoutes.security]: <ShieldCheckIcon />,
    [SubRoutes.notifications]: <BellIcon />,
    [SubRoutes.billing]: <CreditCardIcon />,
    [SubRoutes.general]: <BrandSettingsIcon />,
    [SubRoutes.appearance]: <ColorPaletteIcon />,
    [SubRoutes.team]: <UsersIcon />,
    [SubRoutes.plans]: <BagIcon />,
    [SubRoutes.integrations]: <SettingsToggleIcon />,
    [SubRoutes.notepad]: <NotepadIcon />,
    [SubRoutes.webhooks]: <LiveIcon />,
    [SubRoutes.brandedApp]: <FocusAutoIcon />,
    [SubRoutes.apps]: <FilePlusIcon />,
    [SubRoutes.details]: <BrandSettingsIcon />,
  }[path];
};

export const useBreadcrumbs = () => {
  const { pathname } = useLocation();

  const ignorePaths = [routes.accountSettings(), routes.brandSettings()];
  console.log("pathname", pathname);
  const paths = pathname.split("/").filter(Boolean);

  const breadcrumbs = paths.reduce<
    Array<{ id: number; path: string; breadcrumb: JSX.Element }>
  >((acc, path, index) => {
    // Skip ignored paths but keep them for building full path
    if (ignorePaths.includes(`/${path}`)) {
      return acc;
    }

    const icon = getIcon(path);

    const fullPath = "/" + paths.slice(0, index + 1).join("/");

    // Format path for display (capitalize first letter)
    const formattedLabel = path.charAt(0).toUpperCase() + path.slice(1);

    acc.push({
      id: index,
      path: fullPath,
      breadcrumb: (
        <BreadcrumbItem>
          {icon}
          <BreadcrumbLabel
            className="breadcrumb-label"
            color="grey.400"
            variant="body1"
          >
            {formattedLabel}
          </BreadcrumbLabel>
        </BreadcrumbItem>
      ),
    });

    return acc;
  }, []);

  return breadcrumbs;
};

const BreadcrumbItem = styled(Stack)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1.5)};

  &:hover .breadcrumb-label {
    border-bottom: 0.5px solid ${({ theme }) => theme.palette.grey[400]};
  }

  & svg path {
    stroke: ${({ theme }) => theme.palette.grey[400]};
  }
`;

const BreadcrumbLabel = styled(Typography)`
  cursor: pointer;

  border-bottom: 0.5px solid transparent;
`;
