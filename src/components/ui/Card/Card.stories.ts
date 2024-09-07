// import type { Meta, StoryObj } from "@storybook/react";
import { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta: Meta<typeof Card> = {
  title: "UI-kit/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const CommonBadge: Story = {
  args: {
    name: "Lira Earrings",
    price: "20,00",
  },
};
