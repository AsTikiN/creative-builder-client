import { TableLayout } from "@/layouts/TableLayout";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Table",
  component: TableLayout,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    columns: { control: "object" },
    data: { control: "object" },
  },
} satisfies Meta<typeof TableLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div style={{ width: "1400px" }}>
      <TableLayout {...args} />
    </div>
  ),
  args: {
    columns: [
      { Header: "Name", accessor: "name" },
      { Header: "Age", accessor: "age" },
      { Header: "Country", accessor: "country" },
    ],
    data: [
      { name: "John Doe", age: 30, country: "USA" },
      { name: "Jane Smith", age: 25, country: "Canada" },
      { name: "Bob Johnson", age: 35, country: "UK" },
    ],
  },
};
