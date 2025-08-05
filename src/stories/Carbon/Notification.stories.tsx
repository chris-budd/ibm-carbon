import type { Meta, StoryObj } from '@storybook/nextjs';
import { fn } from 'storybook/test';
import { Notification } from '../../components/Notification';

const meta = {
  title: 'Carbon/Notification',
  component: Notification,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Notification

Notifications communicate information about system status, user actions, or important updates. They provide feedback to users without interrupting their workflow.

## When to use
- Provide feedback after user actions
- Communicate system status changes  
- Alert users of important information
- Confirm successful operations
- Show non-critical errors or warnings

## When not to use
- Critical errors requiring immediate action (use Modal instead)
- Complex information needing detailed explanation
- Permanent status information (use Status Indicator instead)
- Navigation feedback (use appropriate navigation patterns)

## Notification Types
- **Success**: Confirm positive outcomes and successful actions
- **Error**: System errors, validation failures, or critical issues  
- **Warning**: Important information requiring attention but not critical
- **Info**: General information, tips, or neutral updates

## Best Practices
- Use clear, concise messaging
- Choose appropriate notification types for context
- Provide action buttons when users can respond
- Auto-dismiss toast notifications after appropriate time
- Don't overuse notifications (they can become noise)
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Main notification title/heading',
      table: {
        type: { summary: 'string' },
      },
    },
    subtitle: {
      control: 'text',
      description: 'Additional notification message/content',
      table: {
        type: { summary: 'string' },
      },
    },
    kind: {
      control: { type: 'select' },
      options: ['error', 'info', 'info-square', 'success', 'warning', 'warning-alt'],
      description: 'Type/severity of the notification',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'info' },
      },
    },
    variant: {
      control: { type: 'select' },
      options: ['inline', 'toast', 'actionable'],
      description: 'Visual presentation variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'inline' },
      },
    },
    hideCloseButton: {
      control: 'boolean',
      description: 'Whether to hide the close button',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    lowContrast: {
      control: 'boolean',
      description: 'Use low contrast styling for less prominence',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    timeout: {
      control: 'number',
      description: 'Auto-dismiss timeout in milliseconds (toast only)',
      table: {
        type: { summary: 'number' },
      },
    },
    actionButtonLabel: {
      control: 'text',
      description: 'Text for the action button (actionable variant)',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  args: { 
    onClose: fn(),
    onClick: fn(),
    onActionButtonClick: fn(),
  },
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Notification title',
    subtitle: 'This is a default notification message.',
  },
};

export const Success: Story = {
  args: {
    title: 'Success!',
    subtitle: 'Your changes have been saved successfully.',
    kind: 'success',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use to confirm successful actions or positive outcomes. Helps users understand their action was completed.'
      }
    }
  }
};

export const Error: Story = {
  args: {
    title: 'Error occurred',
    subtitle: 'Something went wrong. Please try again.',
    kind: 'error',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use for system errors, validation failures, or critical issues that need user attention.'
      }
    }
  }
};

export const Warning: Story = {
  args: {
    title: 'Warning',
    subtitle: 'This action may have unintended consequences.',
    kind: 'warning',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use for important information that requires attention but isn\'t critical or destructive.'
      }
    }
  }
};

export const Info: Story = {
  args: {
    title: 'Information',
    subtitle: 'Here is some helpful information for you.',
    kind: 'info',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use for general information, tips, or neutral updates that enhance user understanding.'
      }
    }
  }
};

export const InfoSquare: Story = {
  args: {
    title: 'Info Square',
    subtitle: 'This uses the square info icon variant.',
    kind: 'info-square',
  },
};

export const WarningAlt: Story = {
  args: {
    title: 'Alternative Warning',
    subtitle: 'This uses the alternative warning style.',
    kind: 'warning-alt',
  },
};

export const Toast: Story = {
  args: {
    title: 'Toast notification',
    subtitle: 'This is a toast notification that appears temporarily.',
    kind: 'success',
    variant: 'toast',
    timeout: 5000,
  },
  parameters: {
    docs: {
      description: {
        story: 'Temporary notifications that auto-dismiss. Use for non-critical updates that don\'t require action.'
      }
    }
  }
};

export const Actionable: Story = {
  args: {
    title: 'Actionable notification',
    subtitle: 'This notification has an action button you can click.',
    kind: 'info',
    variant: 'actionable',
    actionButtonLabel: 'View details',
  },
  parameters: {
    docs: {
      description: {
        story: 'Notifications with action buttons. Use when users can respond to or act on the notification.'
      }
    }
  }
};

export const LowContrast: Story = {
  args: {
    title: 'Low contrast notification',
    subtitle: 'This notification uses low contrast styling.',
    kind: 'info',
    lowContrast: true,
  },
};

export const NoCloseButton: Story = {
  args: {
    title: 'No close button',
    subtitle: 'This notification cannot be dismissed.',
    kind: 'warning',
    hideCloseButton: true,
  },
};

export const TitleOnly: Story = {
  args: {
    title: 'Title only notification',
    kind: 'success',
  },
};

export const LongContent: Story = {
  args: {
    title: 'Notification with longer content',
    subtitle: 'This is a notification with a longer subtitle that demonstrates how the component handles more text content. It should wrap appropriately and maintain good readability.',
    kind: 'info',
  },
}; 