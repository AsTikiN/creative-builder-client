import { MoneyHandIcon } from "@/icons/MoneyHandIcon";
import { TargetIcon } from "@/icons/TargetIcon";
import { SidebarAccordionProps } from "@components/Accordion/SidebarAccordion";

export const marketingAccordionData: SidebarAccordionProps = {
  title: "Marketing",
  icon: <TargetIcon />,
  tabs: [
    { id: 1, label: "Profiles" },
    { id: 2, label: "Communications" },
    { id: 3, label: "Promotions" },
    { id: 4, label: "Affiliates" },
  ],
  isFilled: true,
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
