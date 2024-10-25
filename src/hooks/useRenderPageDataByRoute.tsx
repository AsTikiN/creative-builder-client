import { routes } from "@config/routes";
import { useLocation } from "react-router-dom";

type Route = ReturnType<(typeof routes)[keyof typeof routes]>;
interface PageData {
  title: string;
  description: string;
}

export const useRenderPageDataByRoute = () => {
  const location = useLocation();
  const path = location.pathname;

  const pageData: Record<Route, PageData> = {
    [routes.brandSettings()]: {
      title: "General",
      description: "Provide essential details about your brand",
    },
    [routes.members()]: {
      title: "Members",
      description: "Add, remove, or update your brand’s team members",
    },
    [routes.plans()]: {
      title: "Plans",
      description:
        "View plan information or switch plans according to your brand’s needs",
    },
    [routes.accountSettings()]: {
      title: "Account",
      description: "Review and update your account information",
    },
    [routes.accountAppearance()]: {
      title: "Appearance",
      description: "Customize the look and feel of your account",
    },
    [routes.notifications()]: {
      title: "Notifications",
      description: "Customize the look and feel of your account",
    },
    [routes.accountBilling()]: {
      title: "Billing",
      description: "Manage your billing information and invoices",
    },
    [routes.brandBilling()]: {
      title: "Billing",
      description: "Manage your brand’s billing information and invoices",
    },
    [routes.integrations()]: {
      title: "Integrations",
      description:
        "Connect and manage services to enhance your brand's functionality.",
    },
    [routes.brandAppearance()]: {
      title: "Appearance",
      description: "Provide essential details about your brand",
    },
  };

  return pageData[path] || { title: "", description: "" };
};
