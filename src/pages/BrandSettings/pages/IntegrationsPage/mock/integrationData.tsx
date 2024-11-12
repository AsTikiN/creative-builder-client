import { ReactNode } from "react";
import { DrawerData } from "..";
import { OpenAiLogoIcon } from "@/icons/OpenAiLogoIcon";
import { FigmaSidebarContent } from "../modules/FigmaSidebarContent";
import { Input } from "@components/Input";
import { FigmaIcon } from "@/icons/FigmaIcon";

interface Integration {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  onSettingsClick: (
    handleDrawerOpen: () => void,
    setDrawerData: React.Dispatch<React.SetStateAction<DrawerData | null>>
  ) => () => void;
}

export const integrationsData: Integration[] = [
  {
    icon: <OpenAiLogoIcon />,
    title: "OpenAI",
    description:
      "Connect your own AI models our platform to power agents and generate content.",
    href: "https://platform.openai.com/settings/api-keys",
    onSettingsClick:
      (
        handleDrawerOpen: () => void,
        setDrawerData: React.Dispatch<React.SetStateAction<DrawerData | null>>
      ) =>
      () => {
        handleDrawerOpen();
        setDrawerData({
          icon: <OpenAiLogoIcon />,
          title: "OpenAI",
          description:
            "Connect your own AI models our platform to power agents and generate content.",
          renderComponent: <Input label="API Key" placeholder="sk-proj-..." />,
        });
      },
  },
  {
    icon: <FigmaIcon />,
    title: "Figma",
    description: "Seamless collaboration and document management.",
    href: "https://www.figma.com/settings",
    onSettingsClick:
      (
        handleDrawerOpen: () => void,
        setDrawerData: React.Dispatch<React.SetStateAction<DrawerData | null>>
      ) =>
      () => {
        handleDrawerOpen();
        setDrawerData({
          icon: <FigmaIcon />,
          title: "Figma",
          description: "Seamless collaboration and document management.",
          renderComponent: <FigmaSidebarContent />,
        });
      },
  },
];
