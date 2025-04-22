
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
                <a href="#getting-started" className="block px-3 py-2 rounded-md bg-accent text-accent-foreground">
                  Getting Started
                </a>
                <a href="#components" className="block px-3 py-2 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                  Components
                </a>
                <a href="#color-system" className="block px-3 py-2 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                  Color System
                </a>
                <a href="#accessibility" className="block px-3 py-2 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                  Accessibility
                </a>
                <a href="#usage" className="block px-3 py-2 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                  Usage Guidelines
                </a>
              </nav>
              
              <h2 className="font-semibold mt-8 mb-4">Components</h2>
              <nav className="space-y-1">
                <a href="#accordion" className="block px-3 py-2 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                  Accordion
                </a>
                <a href="#tags" className="block px-3 py-2 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                  Tags & Badges
                </a>
                <a href="#tabs" className="block px-3 py-2 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                  Tabs
                </a>
                <a href="#sidebar" className="block px-3 py-2 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                  Sidebar
                </a>
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
                  <a href="#accordion" className="text-primary hover:underline">View documentation</a>
                </div>
                
                <div className="border border-border rounded-lg p-6 hover:border-primary/50 transition-all">
                  <h3 className="text-xl font-semibold mb-2">Tags & Badges</h3>
                  <p className="text-muted-foreground mb-4">
                    Compact elements for attributes, metadata, or categories.
                  </p>
                  <a href="#tags" className="text-primary hover:underline">View documentation</a>
                </div>
                
                <div className="border border-border rounded-lg p-6 hover:border-primary/50 transition-all">
                  <h3 className="text-xl font-semibold mb-2">Tabs</h3>
                  <p className="text-muted-foreground mb-4">
                    Organize content into related groups for easier navigation.
                  </p>
                  <a href="#tabs" className="text-primary hover:underline">View documentation</a>
                </div>
                
                <div className="border border-border rounded-lg p-6 hover:border-primary/50 transition-all">
                  <h3 className="text-xl font-semibold mb-2">Sidebar</h3>
                  <p className="text-muted-foreground mb-4">
                    Navigation sidebar with collapsible sections.
                  </p>
                  <a href="#sidebar" className="text-primary hover:underline">View documentation</a>
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
            
            {/* Additional component documentation sections would go here */}
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
