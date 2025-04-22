
import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { 
  Sidebar, 
  SidebarHeader, 
  SidebarContent, 
  SidebarFooter, 
  SidebarItem, 
  SidebarGroup 
} from '../components/design-system/Sidebar';
import { Home, User, Settings, Bell } from 'lucide-react';

const meta: Meta<typeof Sidebar> = {
  title: 'Design System/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  args: {
    defaultCollapsed: false,
  },
  render: (args) => {
    // Use a local state to track active item
    const [activeItem, setActiveItem] = useState('dashboard');
    
    return (
      <div className="h-96 flex border border-border rounded-md overflow-hidden">
        <Sidebar {...args}>
          <SidebarHeader>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center text-primary-foreground">
                DS
              </div>
              <span className="font-semibold">Design System</span>
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarGroup label="Main Menu">
              <SidebarItem 
                icon={<Home size={16} />} 
                active={activeItem === 'dashboard'}
                onClick={() => setActiveItem('dashboard')}
              >
                Dashboard
              </SidebarItem>
              <SidebarItem 
                icon={<Bell size={16} />}
                active={activeItem === 'notifications'}
                onClick={() => setActiveItem('notifications')}
              >
                Notifications
              </SidebarItem>
              <SidebarItem 
                icon={<User size={16} />}
                active={activeItem === 'profile'}
                onClick={() => setActiveItem('profile')}
              >
                Profile
              </SidebarItem>
            </SidebarGroup>
            
            <SidebarGroup label="Settings">
              <SidebarItem 
                icon={<Settings size={16} />}
                active={activeItem === 'preferences'}
                onClick={() => setActiveItem('preferences')}
              >
                Preferences
              </SidebarItem>
              <SidebarItem 
                icon={<User size={16} />} 
                disabled
              >
                Admin (Disabled)
              </SidebarItem>
            </SidebarGroup>
          </SidebarContent>
          
          <SidebarFooter>
            <div className="px-3 py-2 text-sm text-muted-foreground">
              Version 1.0.0
            </div>
          </SidebarFooter>
        </Sidebar>
        
        <div className="flex-1 p-4 bg-background">
          <h2 className="text-lg font-medium mb-4">Main Content Area</h2>
          <p className="text-muted-foreground">
            This is where your main application content would go. The sidebar provides navigation while this area displays the selected content.
          </p>
          <p className="mt-4 font-medium">
            Currently viewing: {activeItem.charAt(0).toUpperCase() + activeItem.slice(1)}
          </p>
        </div>
      </div>
    );
  },
};

export const Collapsed: Story = {
  args: {
    defaultCollapsed: true,
  },
  render: (args) => {
    // Use a local state to track active item
    const [activeItem, setActiveItem] = useState('dashboard');
    
    return (
      <div className="h-96 flex border border-border rounded-md overflow-hidden">
        <Sidebar {...args}>
          <SidebarHeader>
            <div className="flex items-center justify-center">
              <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center text-primary-foreground">
                DS
              </div>
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarGroup label="Main Menu">
              <SidebarItem 
                icon={<Home size={16} />} 
                active={activeItem === 'dashboard'}
                onClick={() => setActiveItem('dashboard')}
              >
                Dashboard
              </SidebarItem>
              <SidebarItem 
                icon={<Bell size={16} />}
                active={activeItem === 'notifications'}
                onClick={() => setActiveItem('notifications')}
              >
                Notifications
              </SidebarItem>
              <SidebarItem 
                icon={<User size={16} />}
                active={activeItem === 'profile'}
                onClick={() => setActiveItem('profile')}
              >
                Profile
              </SidebarItem>
            </SidebarGroup>
            
            <SidebarGroup label="Settings">
              <SidebarItem 
                icon={<Settings size={16} />}
                active={activeItem === 'preferences'}
                onClick={() => setActiveItem('preferences')}
              >
                Preferences
              </SidebarItem>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        
        <div className="flex-1 p-4 bg-background">
          <h2 className="text-lg font-medium mb-4">Collapsed Sidebar Example</h2>
          <p className="text-muted-foreground">
            This demonstrates the sidebar in its collapsed state, showing only icons to maximize content space.
          </p>
          <p className="mt-4 font-medium">
            Currently viewing: {activeItem.charAt(0).toUpperCase() + activeItem.slice(1)}
          </p>
        </div>
      </div>
    )
  }
}
