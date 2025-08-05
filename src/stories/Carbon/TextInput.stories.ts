import type { Meta, StoryObj } from '@storybook/nextjs';
import { fn } from 'storybook/test';
import { TextInput } from '../../components/TextInput';

const meta = {
  title: 'Carbon/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'url', 'tel'],
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
    readOnly: {
      control: 'boolean',
    },
  },
  args: { 
    onChange: fn(),
    onFocus: fn(),
    onBlur: fn(),
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'text-input-default',
    labelText: 'Text input label',
    placeholder: 'Enter text here',
  },
};

export const WithValue: Story = {
  args: {
    id: 'text-input-value',
    labelText: 'Text input with value',
    value: 'Sample text',
  },
};

export const WithHelperText: Story = {
  args: {
    id: 'text-input-helper',
    labelText: 'Text input with helper text',
    helperText: 'This is helper text',
    placeholder: 'Enter text here',
  },
};

export const Disabled: Story = {
  args: {
    id: 'text-input-disabled',
    labelText: 'Disabled text input',
    placeholder: 'Disabled input',
    disabled: true,
  },
};

export const Invalid: Story = {
  args: {
    id: 'text-input-invalid',
    labelText: 'Invalid text input',
    placeholder: 'Enter text here',
    invalid: true,
    invalidText: 'This field is required',
  },
};

export const Password: Story = {
  args: {
    id: 'text-input-password',
    labelText: 'Password input',
    type: 'password',
    placeholder: 'Enter password',
  },
};

export const Email: Story = {
  args: {
    id: 'text-input-email',
    labelText: 'Email input',
    type: 'email',
    placeholder: 'Enter email address',
  },
};

export const Small: Story = {
  args: {
    id: 'text-input-small',
    labelText: 'Small text input',
    size: 'sm',
    placeholder: 'Small input',
  },
};

export const Large: Story = {
  args: {
    id: 'text-input-large',
    labelText: 'Large text input',
    size: 'lg',
    placeholder: 'Large input',
  },
};

export const HiddenLabel: Story = {
  args: {
    id: 'text-input-hidden-label',
    labelText: 'Hidden label',
    hideLabel: true,
    placeholder: 'Input with hidden label',
  },
};

export const ReadOnly: Story = {
  args: {
    id: 'text-input-readonly',
    labelText: 'Read-only input',
    value: 'This is read-only text',
    readOnly: true,
  },
}; 