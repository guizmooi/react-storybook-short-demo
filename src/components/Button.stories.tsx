// src/components/Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "MyComponents/Button", // 👈 make this unique
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { label: "Click Me" },
};

export const Secondary: Story = {
  args: { label: "Another Button" },
};
