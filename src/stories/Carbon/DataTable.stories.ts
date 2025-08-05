import type { Meta, StoryObj } from '@storybook/nextjs';
import { DataTable } from '../../components/DataTable';

const sampleHeaders = [
  { key: 'name', header: 'Name' },
  { key: 'protocol', header: 'Protocol' },
  { key: 'port', header: 'Port' },
  { key: 'rule', header: 'Rule' },
  { key: 'attached_groups', header: 'Attached Groups' },
  { key: 'status', header: 'Status' },
];

const sampleRows = [
  {
    id: 'a',
    name: 'Load Balancer 3',
    protocol: 'HTTP',
    port: 3000,
    rule: 'Round robin',
    attached_groups: 'Kevin\'s VM Groups',
    status: 'Disabled',
  },
  {
    id: 'b',
    name: 'Load Balancer 1',
    protocol: 'HTTP',
    port: 443,
    rule: 'Round robin',
    attached_groups: 'Mauricio\'s VM Groups',
    status: 'Starting',
  },
  {
    id: 'c',
    name: 'Load Balancer 2',
    protocol: 'HTTP',
    port: 80,
    rule: 'DNS delegation',
    attached_groups: 'Andrew\'s VM Groups',
    status: 'Active',
  },
  {
    id: 'd',
    name: 'Load Balancer 6',
    protocol: 'TCP',
    port: 3000,
    rule: 'Round robin',
    attached_groups: 'Marc\'s VM Groups',
    status: 'Disabled',
  },
  {
    id: 'e',
    name: 'Load Balancer 4',
    protocol: 'HTTP',
    port: 443,
    rule: 'Round robin',
    attached_groups: 'Mel\'s VM Groups',
    status: 'Active',
  },
];

const meta = {
  title: 'Carbon/DataTable',
  component: DataTable,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    useZebraStyles: {
      control: 'boolean',
    },
    stickyHeader: {
      control: 'boolean',
    },
    isSortable: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rows: sampleRows,
    headers: sampleHeaders,
  },
};

export const WithZebraStyles: Story = {
  args: {
    rows: sampleRows,
    headers: sampleHeaders,
    useZebraStyles: true,
  },
};

export const Sortable: Story = {
  args: {
    rows: sampleRows,
    headers: sampleHeaders,
    isSortable: true,
  },
};

export const StickyHeader: Story = {
  args: {
    rows: sampleRows,
    headers: sampleHeaders,
    stickyHeader: true,
    useZebraStyles: true,
  },
};

export const Small: Story = {
  args: {
    rows: sampleRows,
    headers: sampleHeaders,
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    rows: sampleRows,
    headers: sampleHeaders,
    size: 'lg',
    useZebraStyles: true,
  },
};

export const Compact: Story = {
  args: {
    rows: sampleRows,
    headers: sampleHeaders,
    size: 'xs',
  },
}; 