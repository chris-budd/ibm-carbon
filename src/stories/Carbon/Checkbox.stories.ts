import type { Meta, StoryObj } from '@storybook/nextjs';
import { fn } from 'storybook/test';
import { Checkbox } from '../../components/Checkbox';

const meta = {
  title: 'Carbon/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    indeterminate: {
      control: 'boolean',
    },
    invalid: {
      control: 'boolean',
    },
    readOnly: {
      control: 'boolean',
    },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    labelText: 'Checkbox label',
    id: 'checkbox-default',
  },
};

export const Checked: Story = {
  args: {
    labelText: 'Checked checkbox',
    id: 'checkbox-checked',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    labelText: 'Disabled checkbox',
    id: 'checkbox-disabled',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    labelText: 'Disabled checked checkbox',
    id: 'checkbox-disabled-checked',
    disabled: true,
    checked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    labelText: 'Indeterminate checkbox',
    id: 'checkbox-indeterminate',
    indeterminate: true,
  },
};

export const WithHelperText: Story = {
  args: {
    labelText: 'Checkbox with helper text',
    id: 'checkbox-helper',
    helperText: 'This is helper text',
  },
};

export const Invalid: Story = {
  args: {
    labelText: 'Invalid checkbox',
    id: 'checkbox-invalid',
    invalid: true,
    invalidText: 'This field is required',
  },
};

export const ReadOnly: Story = {
  args: {
    labelText: 'Read-only checkbox',
    id: 'checkbox-readonly',
    readOnly: true,
    checked: true,
  },
}; 