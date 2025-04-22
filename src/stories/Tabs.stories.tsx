
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/design-system/Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Design System/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    defaultValue: 'tab1',
    orientation: 'horizontal',
  },
  render: (args) => (
    <div className="w-96">
      <Tabs {...args}>
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        </TabsList>
        
        <TabsContent value="tab1" className="p-4 border rounded-md mt-2">
          <h4 className="font-medium mb-2">Tab 1 Content</h4>
          <p className="text-muted-foreground">
            This is the content for Tab 1. Tabs are useful for alternating between views within the same context.
          </p>
        </TabsContent>
        
        <TabsContent value="tab2" className="p-4 border rounded-md mt-2">
          <h4 className="font-medium mb-2">Tab 2 Content</h4>
          <p className="text-muted-foreground">
            This is the content for Tab 2. Users can navigate between tab content without leaving the page.
          </p>
        </TabsContent>
        
        <TabsContent value="tab3" className="p-4 border rounded-md mt-2">
          <h4 className="font-medium mb-2">Tab 3 Content</h4>
          <p className="text-muted-foreground">
            This is the content for Tab 3. Tabs help organize content and reduce clutter.
          </p>
        </TabsContent>
      </Tabs>
    </div>
  ),
};

export const VerticalOrientation: Story = {
  args: {
    defaultValue: 'tab1',
    orientation: 'vertical',
  },
  render: (args) => (
    <div className="w-96">
      <Tabs {...args}>
        <TabsList>
          <TabsTrigger value="tab1">Account</TabsTrigger>
          <TabsTrigger value="tab2">Password</TabsTrigger>
          <TabsTrigger value="tab3">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="tab1" className="p-4 border rounded-md">
          <h4 className="font-medium mb-2">Account Settings</h4>
          <p className="text-muted-foreground">
            Manage your account details and preferences.
          </p>
        </TabsContent>
        
        <TabsContent value="tab2" className="p-4 border rounded-md">
          <h4 className="font-medium mb-2">Password Settings</h4>
          <p className="text-muted-foreground">
            Change your password and security preferences.
          </p>
        </TabsContent>
        
        <TabsContent value="tab3" className="p-4 border rounded-md">
          <h4 className="font-medium mb-2">System Settings</h4>
          <p className="text-muted-foreground">
            Manage system configuration and options.
          </p>
        </TabsContent>
      </Tabs>
    </div>
  ),
};

export const WithDisabledTab: Story = {
  args: {
    defaultValue: 'tab1',
  },
  render: (args) => (
    <div className="w-96">
      <Tabs {...args}>
        <TabsList>
          <TabsTrigger value="tab1">Account</TabsTrigger>
          <TabsTrigger value="tab2">Password</TabsTrigger>
          <TabsTrigger value="tab3" disabled>Settings (Disabled)</TabsTrigger>
        </TabsList>
        
        <TabsContent value="tab1" className="p-4 border rounded-md mt-2">
          <h4 className="font-medium mb-2">Account Settings</h4>
          <p className="text-muted-foreground">
            Manage your account details and preferences.
          </p>
        </TabsContent>
        
        <TabsContent value="tab2" className="p-4 border rounded-md mt-2">
          <h4 className="font-medium mb-2">Password Settings</h4>
          <p className="text-muted-foreground">
            Change your password and security preferences.
          </p>
        </TabsContent>
        
        <TabsContent value="tab3" className="p-4 border rounded-md mt-2">
          <h4 className="font-medium mb-2">System Settings</h4>
          <p className="text-muted-foreground">
            This tab is disabled and cannot be accessed.
          </p>
        </TabsContent>
      </Tabs>
    </div>
  ),
};
