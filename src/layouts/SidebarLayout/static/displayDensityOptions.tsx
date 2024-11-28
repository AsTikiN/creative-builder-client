import { LayoutTopIcon } from "@/icons/LayoutTopIcon";
import { MenuIcon } from "@/icons/MenuIcon";
import { SelectOption } from "@components/MultipleSelect";

export const displayDensityOptions: SelectOption[] = [
  {
    value: "Display density",
    label: "Display density",
    type: "title",
  },
  { value: "Compact", label: "Compact", icon: <MenuIcon /> },
  {
    value: "Comfortable",
    label: "Comfortable",
    icon: <LayoutTopIcon />,
  },
  { value: "", label: "", type: "divider" },
  { value: "Ordering", label: "Ordering", type: "title" },
  { value: "recentActivity", label: "Recent activity" },
  { value: "creationDate", label: "Created" },
];
