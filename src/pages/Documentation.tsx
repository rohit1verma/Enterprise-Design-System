
import { useState } from 'react';
import { ThemeToggle } from '../components/design-system/ThemeToggle';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Accordion, 
  AccordionItemWrapper, 
  AccordionTrigger, 
  AccordionContent 
} from '../components/design-system/Accordion';
import { 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent 
} from '../components/design-system/Tabs';
import { Tag } from '../components/design-system/Tag';

const Documentation = () => {
  const [activeSection, setActiveSection] = useState<string>("getting-started");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border sticky top-0 z-40 w-full bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center text-primary-foreground">
                DS
              </div>
              <span className="font-semibold">Enterprise Design System</span>
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-6">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/documentation" className="text-foreground font-medium">
                Documentation
              </Link>
              <Link to="/playground" className="text-muted-foreground hover:text-foreground transition-colors">
                Playground
              </Link>
            </nav>
            
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Documentation Content */}
      <div className="container py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h2 className="font-semibold mb-4">Documentation</h2>
              <nav className="space-y-1">
                <button 
                  onClick={() => scrollToSection('getting-started')} 
                  className={`block w-full text-left px-3 py-2 rounded-md ${activeSection === 'getting-started' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'}`}
                >
                  Getting Started
                </button>
                <button 
                  onClick={() => scrollToSection('components')} 
                  className={`block w-full text-left px-3 py-2 rounded-md ${activeSection === 'components' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'}`}
                >
                  Components
                </button>
                <button 
                  onClick={() => scrollToSection('color-system')} 
                  className={`block w-full text-left px-3 py-2 rounded-md ${activeSection === 'color-system' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'}`}
                >
                  Color System
                </button>
                <button 
                  onClick={() => scrollToSection('accessibility')} 
                  className={`block w-full text-left px-3 py-2 rounded-md ${activeSection === 'accessibility' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'}`}
                >
                  Accessibility
                </button>
                <button 
                  onClick={() => scrollToSection('usage')} 
                  className={`block w-full text-left px-3 py-2 rounded-md ${activeSection === 'usage' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'}`}
                >
                  Usage Guidelines
                </button>
              </nav>
              
              <h2 className="font-semibold mt-8 mb-4">Components</h2>
              <nav className="space-y-1">
                <button 
                  onClick={() => scrollToSection('accordion')} 
                  className={`block w-full text-left px-3 py-2 rounded-md ${activeSection === 'accordion' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'}`}
                >
                  Accordion
                </button>
                <button 
                  onClick={() => scrollToSection('tags')} 
                  className={`block w-full text-left px-3 py-2 rounded-md ${activeSection === 'tags' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'}`}
                >
                  Tags & Badges
                </button>
                <button 
                  onClick={() => scrollToSection('tabs')} 
                  className={`block w-full text-left px-3 py-2 rounded-md ${activeSection === 'tabs' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'}`}
                >
                  Tabs
                </button>
                <button 
                  onClick={() => scrollToSection('sidebar')} 
                  className={`block w-full text-left px-3 py-2 rounded-md ${activeSection === 'sidebar' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'}`}
                >
                  Sidebar
                </button>
              </nav>
            </div>
          </aside>
          
          {/* Main Content */}
          <main className="flex-1 max-w-3xl">
            <section id="getting-started" className="mb-16">
              <h1 className="text-3xl font-bold mb-6">Getting Started</h1>
              <p className="text-lg text-muted-foreground mb-4">
                Welcome to the Enterprise Design System documentation. This guide will help you get started with using our components in your projects.
              </p>
              
              <div className="mt-8 space-y-4">
                <h2 className="text-2xl font-semibold">Installation</h2>
                <div className="bg-muted p-4 rounded-md font-mono text-sm">
                  npm install enterprise-design-system
                </div>
              </div>
              
              <div className="mt-8 space-y-4">
                <h2 className="text-2xl font-semibold">Basic Usage</h2>
                <div className="bg-muted p-4 rounded-md font-mono text-sm">
                  {`import { Button } from 'enterprise-design-system';\n\nfunction App() {\n  return <Button>Click me</Button>;\n}`}
                </div>
              </div>
            </section>
            
            <section id="components" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Components</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our design system includes a wide range of components for building enterprise applications.
                Each component is designed with accessibility, responsiveness, and theming in mind.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-border rounded-lg p-6 hover:border-primary/50 transition-all">
                  <h3 className="text-xl font-semibold mb-2">Accordion</h3>
                  <p className="text-muted-foreground mb-4">
                    Vertically stacked sections of content that can be toggled.
                  </p>
                  <button 
                    onClick={() => scrollToSection('accordion')} 
                    className="text-primary hover:underline"
                  >
                    View documentation
                  </button>
                </div>
                
                <div className="border border-border rounded-lg p-6 hover:border-primary/50 transition-all">
                  <h3 className="text-xl font-semibold mb-2">Tags & Badges</h3>
                  <p className="text-muted-foreground mb-4">
                    Compact elements for attributes, metadata, or categories.
                  </p>
                  <button 
                    onClick={() => scrollToSection('tags')} 
                    className="text-primary hover:underline"
                  >
                    View documentation
                  </button>
                </div>
                
                <div className="border border-border rounded-lg p-6 hover:border-primary/50 transition-all">
                  <h3 className="text-xl font-semibold mb-2">Tabs</h3>
                  <p className="text-muted-foreground mb-4">
                    Organize content into related groups for easier navigation.
                  </p>
                  <button 
                    onClick={() => scrollToSection('tabs')} 
                    className="text-primary hover:underline"
                  >
                    View documentation
                  </button>
                </div>
                
                <div className="border border-border rounded-lg p-6 hover:border-primary/50 transition-all">
                  <h3 className="text-xl font-semibold mb-2">Sidebar</h3>
                  <p className="text-muted-foreground mb-4">
                    Navigation sidebar with collapsible sections.
                  </p>
                  <button 
                    onClick={() => scrollToSection('sidebar')} 
                    className="text-primary hover:underline"
                  >
                    View documentation
                  </button>
                </div>
              </div>
            </section>
            
            <section id="accordion" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Accordion</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Accordions display a list of high-level options that can expand/collapse to reveal more information.
              </p>
              
              <div className="border border-border rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Example</h3>
                <Accordion type="single" defaultExpanded={["item-1"]}>
                  <AccordionItemWrapper id="item-1">
                    <AccordionTrigger>What is a design system?</AccordionTrigger>
                    <AccordionContent>
                      A design system is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications.
                    </AccordionContent>
                  </AccordionItemWrapper>
                  
                  <AccordionItemWrapper id="item-2">
                    <AccordionTrigger>Why use a design system?</AccordionTrigger>
                    <AccordionContent>
                      Design systems help maintain consistency across products, speed up the development process, and ensure accessibility standards are met across all interfaces.
                    </AccordionContent>
                  </AccordionItemWrapper>
                </Accordion>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Usage</h3>
                <div className="bg-muted p-4 rounded-md font-mono text-sm">
                  {`import { Accordion, AccordionItemWrapper, AccordionTrigger, AccordionContent } from 'enterprise-design-system';\n\nfunction AccordionExample() {\n  return (\n    <Accordion type="single" defaultExpanded={["item-1"]}>\n      <AccordionItemWrapper id="item-1">\n        <AccordionTrigger>Title 1</AccordionTrigger>\n        <AccordionContent>Content 1</AccordionContent>\n      </AccordionItemWrapper>\n    </Accordion>\n  );\n}`}
                </div>
              </div>
            </section>
            
            {/* Adding color-system section */}
            <section id="color-system" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Color System</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our token-based color system provides a consistent visual language and helps maintain 
                design consistency across your applications.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="rounded-md overflow-hidden border border-border">
                  <div className="h-20 bg-primary"></div>
                  <div className="p-2 text-sm">
                    <div className="font-medium">Primary</div>
                    <div className="text-xs text-muted-foreground">var(--color-primary)</div>
                  </div>
                </div>
                <div className="rounded-md overflow-hidden border border-border">
                  <div className="h-20 bg-secondary"></div>
                  <div className="p-2 text-sm">
                    <div className="font-medium">Secondary</div>
                    <div className="text-xs text-muted-foreground">var(--color-secondary)</div>
                  </div>
                </div>
                <div className="rounded-md overflow-hidden border border-border">
                  <div className="h-20 bg-accent"></div>
                  <div className="p-2 text-sm">
                    <div className="font-medium">Accent</div>
                    <div className="text-xs text-muted-foreground">var(--color-accent)</div>
                  </div>
                </div>
              </div>
              
              <Link to="/?selectedTab=colors" className="inline-block">
                <Button>View full color system</Button>
              </Link>
            </section>
            
            {/* Adding accessibility section */}
            <section id="accessibility" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Accessibility</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our design system is built with accessibility in mind, following WCAG guidelines to ensure your applications are usable by everyone.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Key Features</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>All interactive elements are keyboard accessible</li>
                  <li>Color contrast ratios meet WCAG AA standards at minimum</li>
                  <li>Proper ARIA attributes are used throughout components</li>
                  <li>Focus states are visible and consistent</li>
                  <li>Screen reader friendly markup and announcements</li>
                </ul>
              </div>
            </section>
            
            {/* Adding usage section */}
            <section id="usage" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Usage Guidelines</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Follow these guidelines to ensure consistent implementation of the design system across your projects.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Component Selection</h3>
                  <p>Choose the appropriate component for each UI need to maintain consistency and usability.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Customization</h3>
                  <p>Customize components using the provided props rather than overriding styles when possible.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Responsive Design</h3>
                  <p>Test your implementation across different screen sizes to ensure your UI is fully responsive.</p>
                </div>
              </div>
            </section>
            
            {/* Adding tags section */}
            <section id="tags" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Tags & Badges</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Tags and badges help label, categorize, and organize content.
              </p>
              
              <div className="border border-border rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Example</h3>
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
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Usage</h3>
                <div className="bg-muted p-4 rounded-md font-mono text-sm">
                  {`import { Tag } from 'enterprise-design-system';\n\nfunction TagExample() {\n  return (\n    <div>\n      <Tag variant="primary">Primary Tag</Tag>\n      <Tag variant="success">Success Tag</Tag>\n    </div>\n  );\n}`}
                </div>
              </div>
            </section>
            
            {/* Adding tabs section */}
            <section id="tabs" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Tabs</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Tabs organize related content into separate views that users can switch between.
              </p>
              
              <div className="border border-border rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Example</h3>
                <Tabs defaultValue="overview">
                  <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="p-4 mt-2">
                    <p>This is the overview tab content.</p>
                  </TabsContent>
                  
                  <TabsContent value="details" className="p-4 mt-2">
                    <p>This is the details tab content.</p>
                  </TabsContent>
                  
                  <TabsContent value="settings" className="p-4 mt-2">
                    <p>This is the settings tab content.</p>
                  </TabsContent>
                </Tabs>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Usage</h3>
                <div className="bg-muted p-4 rounded-md font-mono text-sm">
                  {`import { Tabs, TabsList, TabsTrigger, TabsContent } from 'enterprise-design-system';\n\nfunction TabsExample() {\n  return (\n    <Tabs defaultValue="tab1">\n      <TabsList>\n        <TabsTrigger value="tab1">Tab 1</TabsTrigger>\n        <TabsTrigger value="tab2">Tab 2</TabsTrigger>\n      </TabsList>\n      <TabsContent value="tab1">Content 1</TabsContent>\n      <TabsContent value="tab2">Content 2</TabsContent>\n    </Tabs>\n  );\n}`}
                </div>
              </div>
            </section>
            
            {/* Adding sidebar section */}
            <section id="sidebar" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Sidebar</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Sidebar components provide navigation for complex applications with multiple sections.
              </p>
              
              <div className="border border-border rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Example</h3>
                <div className="bg-muted p-4 rounded-md">
                  <p>See the design system demo page for a working sidebar example.</p>
                  <Link to="/components" className="text-primary hover:underline mt-2 inline-block">
                    View sidebar demo
                  </Link>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Usage</h3>
                <div className="bg-muted p-4 rounded-md font-mono text-sm">
                  {`import { Sidebar, SidebarHeader, SidebarContent, SidebarFooter, SidebarItem } from 'enterprise-design-system';\n\nfunction SidebarExample() {\n  return (\n    <Sidebar>\n      <SidebarHeader>Header</SidebarHeader>\n      <SidebarContent>\n        <SidebarItem>Item 1</SidebarItem>\n        <SidebarItem>Item 2</SidebarItem>\n      </SidebarContent>\n      <SidebarFooter>Footer</SidebarFooter>\n    </Sidebar>\n  );\n}`}
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center text-primary-foreground">
                DS
              </div>
              <span className="font-semibold">Enterprise Design System</span>
            </div>
            
            <div className="flex gap-8">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/documentation" className="text-muted-foreground hover:text-foreground transition-colors">
                Documentation
              </Link>
              <Link to="/playground" className="text-muted-foreground hover:text-foreground transition-colors">
                Playground
              </Link>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground">
                © 2025 Enterprise Design System. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Documentation;
