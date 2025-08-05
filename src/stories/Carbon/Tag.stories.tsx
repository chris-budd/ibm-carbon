import type { Meta, StoryObj } from '@storybook/nextjs';
import { fn } from 'storybook/test';
import { Tag } from '../../components/Tag';

const meta = {
  title: 'Carbon/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['red', 'magenta', 'purple', 'blue', 'cyan', 'teal', 'green', 'gray', 'cool-gray', 'warm-gray', 'high-contrast', 'outline'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md'],
    },
    disabled: {
      control: 'boolean',
    },
    filter: {
      control: 'boolean',
    },
  },
  args: { 
    onClose: fn(),
    onClick: fn(),
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Tag',
  },
};

export const Red: Story = {
  args: {
    children: 'Red Tag',
    type: 'red',
  },
};

export const Blue: Story = {
  args: {
    children: 'Blue Tag',
    type: 'blue',
  },
};

export const Green: Story = {
  args: {
    children: 'Green Tag',
    type: 'green',
  },
};

export const Purple: Story = {
  args: {
    children: 'Purple Tag',
    type: 'purple',
  },
};

export const HighContrast: Story = {
  args: {
    children: 'High Contrast',
    type: 'high-contrast',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Tag',
    type: 'outline',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Tag',
    size: 'sm',
    type: 'blue',
  },
};

export const Filter: Story = {
  args: {
    children: 'Filter Tag',
    filter: true,
    type: 'cyan',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Tag',
    disabled: true,
    type: 'green',
  },
};

export const Magenta: Story = {
  args: {
    children: 'Magenta Tag',
    type: 'magenta',
  },
};

export const Cyan: Story = {
  args: {
    children: 'Cyan Tag',
    type: 'cyan',
  },
};

export const Teal: Story = {
  args: {
    children: 'Teal Tag',
    type: 'teal',
  },
}; 