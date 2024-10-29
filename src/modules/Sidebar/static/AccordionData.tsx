import { MoneyHandIcon } from "@/icons/MoneyHandIcon";
import { TargetIcon } from "@/icons/TargetIcon";
import { SidebarAccordionProps } from "@components/Accordion/SidebarAccordion";

export const marketingAccordionData: SidebarAccordionProps = {
  title: "Marketing",
  icon: <TargetIcon />,
  tabs: [
    { id: 1, label: "Email" },
    { id: 2, label: "SMS" },
    { id: 3, label: "Messages" },
    { id: 4, label: "Discounts" },
    { id: 5, label: "Affiliates" },
  ],
};

export const financesAccordionData: SidebarAccordionProps = {
  title: "Finances",
  icon: <MoneyHandIcon />,
  tabs: [
    { id: 1, label: "Transactions" },
    { id: 2, label: "Payouts" },
    { id: 3, label: "Disputes" },
  ],
};
