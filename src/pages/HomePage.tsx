
import { ArrowRight, Palette, Layers, Layout, Book } from 'lucide-react';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from '../components/design-system/ThemeToggle';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with Navigation */}
      <header className="border-b border-border sticky top-0 z-40 w-full bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center text-primary-foreground">
              DS
            </div>
            <span className="font-semibold">Enterprise Design System</span>
          </div>
          
          <div className="flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <Link to="/?selectedTab=accordion" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Accordion</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Vertically stacked sections of content that can be toggled.
                        </p>
                      </Link>
                      <Link to="/?selectedTab=tags" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Tags & Badges</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Compact elements for attributes, metadata, or categories.
                        </p>
                      </Link>
                      <Link to="/?selectedTab=tabs" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Tabs</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Organize content into related groups for easier navigation.
                        </p>
                      </Link>
                      <Link to="/?selectedTab=colors" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Color System</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Token-based color system with light and dark mode support.
                        </p>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/documentation" className={navigationMenuTriggerStyle()}>
                    Documentation
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/playground" className={navigationMenuTriggerStyle()}>
                    Playground
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              Enterprise-Grade Design System
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Build consistent, accessible interfaces with ease
            </h1>
            <p className="text-xl text-muted-foreground mt-4">
              A professionally crafted design system with modular components, tokens, and utilities for building modern enterprise applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button size="lg" asChild>
                <Link to="/?selectedTab=colors">
                  Explore Components <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/documentation">
                  Documentation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-accent">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Everything you need for enterprise applications</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our design system provides all the tools necessary to build professional, accessible, and consistent user interfaces at scale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Palette className="h-10 w-10" />}
              title="Token-Based Colors"
              description="A comprehensive color system with semantic tokens and support for light and dark modes."
            />
            <FeatureCard 
              icon={<Layers className="h-10 w-10" />}
              title="Accessible Components"
              description="All components meet WCAG accessibility standards with keyboard navigation support."
            />
            <FeatureCard 
              icon={<Layout className="h-10 w-10" />}
              title="Responsive Design"
              description="Components adapt seamlessly to any screen size from mobile to desktop."
            />
            <FeatureCard 
              icon={<Book className="h-10 w-10" />}
              title="Detailed Documentation"
              description="Extensive documentation with usage examples and best practices."
            />
            <FeatureCard 
              icon={<Layout className="h-10 w-10" />}
              title="Navigation Components"
              description="Tabs, sidebars, and menus for efficient navigation patterns."
            />
            <FeatureCard 
              icon={<ArrowRight className="h-10 w-10" />}
              title="Customizable"
              description="Easily adaptable to match your brand's unique visual identity."
            />
          </div>
        </div>
      </section>

      {/* Color Palette Explorer */}
      <section className="py-20 px-4">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Color Palette Explorer</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our token-based color system with semantic meaning and support for light and dark modes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <ColorCard title="Primary" colorClasses={['bg-primary', 'bg-primary-light', 'bg-primary-dark']} />
            <ColorCard title="Secondary" colorClasses={['bg-secondary', 'bg-secondary-light', 'bg-secondary-dark']} />
            <ColorCard title="Tertiary" colorClasses={['bg-tertiary', 'bg-tertiary-light', 'bg-tertiary-dark']} />
            <ColorCard title="Semantic" colorClasses={['bg-success', 'bg-warning', 'bg-error', 'bg-info']} />
          </div>
          
          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <Link to="/?selectedTab=colors">
                View full color system
              </Link>
            </Button>
          </div>
        </div>
      </section>

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
              <Link to="/?selectedTab=colors" className="text-muted-foreground hover:text-foreground transition-colors">
                Components
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

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-card rounded-lg border border-border p-6 transition-all hover:shadow-md">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

interface ColorCardProps {
  title: string;
  colorClasses: string[];
}

const ColorCard = ({ title, colorClasses }: ColorCardProps) => {
  return (
    <div className="rounded-lg border border-border overflow-hidden">
      <div className="p-4 border-b border-border">
        <h3 className="font-medium">{title}</h3>
      </div>
      <div>
        {colorClasses.map((colorClass, index) => (
          <div 
            key={index}
            className={`h-12 ${colorClass} flex items-end justify-end p-2`}
          >
            <span className="text-xs font-mono bg-background/80 text-foreground px-2 py-1 rounded">
              {colorClass.replace('bg-', '')}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
