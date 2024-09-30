import type { Meta, StoryObj } from "@storybook/react";
import { WorkspacesStory } from "./Workspaces";

const meta = {
  title: "Components/WorkspacesBoard",
  component: WorkspacesStory,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof WorkspacesStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
