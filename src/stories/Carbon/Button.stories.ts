import type { Meta, StoryObj } from '@storybook/nextjs';
import { fn } from 'storybook/test';
import { Button } from '../../components/Button';

const meta = {
  title: 'Carbon/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Button

The Button component is a fundamental interactive element built on IBM's Carbon Design System. Use buttons to trigger actions, submit forms, or navigate through your application.

## When to use
- Trigger an action or event
- Submit forms
- Navigate to another page
- Open/close dialogs or modals

## When not to use  
- For navigation that doesn't trigger an action (use links instead)
- When the action is destructive without confirmation (consider using danger variant with confirmation)

## Best Practices
- Use clear, action-oriented labels (1-3 words)
- Provide only one primary button per page/section  
- Use appropriate button kinds for visual hierarchy
- Ensure adequate touch targets (minimum 44px)
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    kind: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'ghost', 'danger', 'danger--tertiary', 'danger--ghost'],
      description: 'Visual style variant of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Size of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      description: 'Button content (text or elements)',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    onClick: {
      description: 'Function called when button is clicked',
      table: {
        type: { summary: '() => void' },
      },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    kind: 'primary',
    children: 'Primary Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use for the main action on a page or in a dialog. There should only be one primary button visible at a time.'
      }
    }
  }
};

export const Secondary: Story = {
  args: {
    kind: 'secondary',
    children: 'Secondary Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use for secondary actions that are still important but not the main focus.'
      }
    }
  }
};

export const Tertiary: Story = {
  args: {
    kind: 'tertiary',
    children: 'Tertiary Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use for less prominent actions or when you need a lower emphasis button.'
      }
    }
  }
};

export const Ghost: Story = {
  args: {
    kind: 'ghost',
    children: 'Ghost Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use for subtle actions, in toolbars, or when you need minimal visual weight.'
      }
    }
  }
};

export const Danger: Story = {
  args: {
    kind: 'danger',
    children: 'Delete Item',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use for destructive actions like deleting or removing items. Always consider adding confirmation dialogs.'
      }
    }
  }
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use in compact interfaces or when space is limited.'
      }
    }
  }
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use for prominent actions or when you need increased touch targets.'
      }
    }
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use when the action is temporarily unavailable. Consider providing helper text to explain why.'
      }
    }
  }
}; 