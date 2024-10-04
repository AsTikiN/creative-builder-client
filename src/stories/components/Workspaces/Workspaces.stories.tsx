import type { Meta, StoryObj } from "@storybook/react";
import { WorkspacesStory } from "./Workspaces";

const meta = {
  title: "Components/BrandSwitcher",
  component: WorkspacesStory,
  parameters: {
    layout: "centered",
  },

} satisfies Meta<typeof WorkspacesStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
