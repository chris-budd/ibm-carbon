import type { Meta, StoryObj } from '@storybook/nextjs';
import { fn } from 'storybook/test';
import { Modal } from '../../components/Modal';
import { useState } from 'react';

const meta = {
  title: 'Carbon/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Modal

Modals focus user attention exclusively on one task or piece of information via a window that sits on top of the page content.

## When to use
- Critical information that requires immediate attention
- Destructive actions needing confirmation  
- Focused tasks that benefit from removing distractions
- Simple content that doesn't warrant a new page

## When not to use
- Non-critical information (use notifications instead)
- Complex workflows better suited to full pages
- When users need to reference other page content
- For error messages (use notifications instead)

## Best Practices
- Keep modal content focused and concise
- Use clear, descriptive headings
- Provide obvious ways to close the modal
- Use appropriate modal types for the content
- Test keyboard navigation and screen reader support

## Accessibility
- Focus moves to the modal when opened
- Focus is trapped within the modal
- Escape key closes the modal
- Focus returns to the trigger element when closed
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the modal is open',
      table: {
        type: { summary: 'boolean' },
      },
    },
    modalHeading: {
      control: 'text',
      description: 'Main heading text for the modal',
      table: {
        type: { summary: 'string' },
      },
    },
    modalLabel: {
      control: 'text', 
      description: 'Optional label text above the heading',
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Size of the modal',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    danger: {
      control: 'boolean',
      description: 'Use danger styling for destructive actions',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    alert: {
      control: 'boolean',
      description: 'Alert modal variant for important information',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    passiveModal: {
      control: 'boolean',
      description: 'Information-only modal with no action buttons',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    primaryButtonDisabled: {
      control: 'boolean',
      description: 'Whether the primary button is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    primaryButtonText: {
      control: 'text',
      description: 'Text for the primary action button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Submit' },
      },
    },
    secondaryButtonText: {
      control: 'text',
      description: 'Text for the secondary action button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Cancel' },
      },
    },
  },
  args: { 
    onRequestClose: fn(),
    onRequestSubmit: fn(),
    onSecondarySubmit: fn(),
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    modalHeading: 'Modal heading',
    modalLabel: 'Optional label',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue. Phasellus consequat augue vitae tellus tincidunt posuere. Curabitur justo urna, consectetur vel elit iaculis, ultrices condimentum risus.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Standard modal with primary and secondary action buttons. Use for confirmations, forms, or focused tasks.'
      }
    }
  }
};

export const Danger: Story = {
  args: {
    open: true,
    modalHeading: 'Delete item',
    modalLabel: 'Danger modal',
    danger: true,
    primaryButtonText: 'Delete',
    children: 'Are you sure you want to delete this item? This action cannot be undone.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use for destructive actions that require confirmation. The danger styling helps users understand the severity of the action.'
      }
    }
  }
};

export const PassiveModal: Story = {
  args: {
    open: true,
    modalHeading: 'Passive modal',
    modalLabel: 'Information',
    passiveModal: true,
    children: 'This is a passive modal with no action buttons. You can only close it using the X button.',
  },
};

export const Alert: Story = {
  args: {
    open: true,
    modalHeading: 'Alert modal',
    alert: true,
    children: 'This is an alert modal. It focuses attention on important information.',
  },
};

export const Small: Story = {
  args: {
    open: true,
    modalHeading: 'Small modal',
    size: 'sm',
    children: 'This is a small modal with less content.',
  },
};

export const Large: Story = {
  args: {
    open: true,
    modalHeading: 'Large modal',
    size: 'lg',
    children: 'This is a large modal with more space for content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue. Phasellus consequat augue vitae tellus tincidunt posuere. Curabitur justo urna. Consectetur vel elit iaculis, ultrices condimentum risus.',
  },
};

export const WithDisabledPrimaryButton: Story = {
  args: {
    open: true,
    modalHeading: 'Modal with disabled primary button',
    primaryButtonDisabled: true,
    children: 'The primary button is disabled until some condition is met.',
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    
    return (
      <div>
        <button 
          onClick={() => setOpen(true)}
          style={{ padding: '8px 16px', backgroundColor: '#0f62fe', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          Open Modal
        </button>
        <Modal
          {...args}
          open={open}
          onRequestClose={() => setOpen(false)}
          onRequestSubmit={() => {
            setOpen(false);
            args.onRequestSubmit?.();
          }}
          onSecondarySubmit={() => {
            setOpen(false);
            args.onSecondarySubmit?.();
          }}
        >
          <p>Click the buttons to see the modal interactions.</p>
        </Modal>
      </div>
    );
  },
  args: {
    modalHeading: 'Interactive modal',
    modalLabel: 'Click to test',
    open: false,
    children: 'Click the buttons to see the modal interactions.',
  },
}; 