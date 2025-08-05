import type { Meta, StoryObj } from '@storybook/nextjs';
import { fn } from 'storybook/test';
import { Select } from '../../components/Select';

const sampleOptions = [
  { value: 'option-1', text: 'Option 1' },
  { value: 'option-2', text: 'Option 2' },
  { value: 'option-3', text: 'Option 3' },
  { value: 'option-4', text: 'Option 4 (Disabled)', disabled: true },
  { value: 'option-5', text: 'Option 5' },
];

const meta = {
  title: 'Carbon/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
    invalid: {
      control: 'boolean',
    },
    hideLabel: {
      control: 'boolean',
    },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'select-default',
    labelText: 'Select an option',
    options: sampleOptions,
  },
};

export const WithDefaultValue: Story = {
  args: {
    id: 'select-default-value',
    labelText: 'Select with default value',
    options: sampleOptions,
    defaultValue: 'option-2',
  },
};

export const WithHelperText: Story = {
  args: {
    id: 'select-helper',
    labelText: 'Select with helper text',
    options: sampleOptions,
    helperText: 'This is helper text to guide your selection',
  },
};

export const Disabled: Story = {
  args: {
    id: 'select-disabled',
    labelText: 'Disabled select',
    options: sampleOptions,
    disabled: true,
  },
};

export const Invalid: Story = {
  args: {
    id: 'select-invalid',
    labelText: 'Invalid select',
    options: sampleOptions,
    invalid: true,
    invalidText: 'A valid value is required',
  },
};

export const Small: Story = {
  args: {
    id: 'select-small',
    labelText: 'Small select',
    options: sampleOptions,
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    id: 'select-large',
    labelText: 'Large select',
    options: sampleOptions,
    size: 'lg',
  },
};

export const HiddenLabel: Story = {
  args: {
    id: 'select-hidden-label',
    labelText: 'Hidden label',
    options: sampleOptions,
    hideLabel: true,
    placeholder: 'Choose your option...',
  },
}; 