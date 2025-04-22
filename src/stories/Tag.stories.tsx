
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Tag } from '../components/design-system/Tag';

const meta: Meta<typeof Tag> = {
  title: 'Design System/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { 
      control: 'select',
      options: ['default', 'primary', 'secondary', 'tertiary', 'success', 'warning', 'error', 'info']
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg']
    },
    removable: {
      control: 'boolean'
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    children: 'Default Tag',
    variant: 'default',
    size: 'md',
    removable: false,
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary Tag',
    variant: 'primary',
    size: 'md',
    removable: false,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Tag',
    variant: 'secondary',
    size: 'md',
    removable: false,
  },
};

export const Success: Story = {
  args: {
    children: 'Success Tag',
    variant: 'success',
    size: 'md',
    removable: false,
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning Tag',
    variant: 'warning',
    size: 'md',
    removable: false,
  },
};

export const Error: Story = {
  args: {
    children: 'Error Tag',
    variant: 'error',
    size: 'md',
    removable: false,
  },
};

export const Info: Story = {
  args: {
    children: 'Info Tag',
    variant: 'info',
    size: 'md',
    removable: false,
  },
};

export const Small: Story = {
  args: {
    children: 'Small Tag',
    variant: 'primary',
    size: 'sm',
    removable: false,
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium Tag',
    variant: 'primary',
    size: 'md',
    removable: false,
  },
};

export const Large: Story = {
  args: {
    children: 'Large Tag',
    variant: 'primary',
    size: 'lg',
    removable: false,
  },
};

export const Removable: Story = {
  args: {
    children: 'Removable Tag',
    variant: 'primary',
    size: 'md',
    removable: true,
    onRemove: () => {
      alert('Tag removed!');
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag variant="default">Default</Tag>
      <Tag variant="primary">Primary</Tag>
      <Tag variant="secondary">Secondary</Tag>
      <Tag variant="tertiary">Tertiary</Tag>
      <Tag variant="success">Success</Tag>
      <Tag variant="warning">Warning</Tag>
      <Tag variant="error">Error</Tag>
      <Tag variant="info">Info</Tag>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2 items-center">
      <Tag size="sm" variant="primary">Small</Tag>
      <Tag size="md" variant="primary">Medium</Tag>
      <Tag size="lg" variant="primary">Large</Tag>
    </div>
  ),
};
