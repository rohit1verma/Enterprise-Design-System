
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, Settings, User, LayoutDashboard, ChevronRight, Bell, BarChart } from 'lucide-react';

import { ThemeProvider } from '../components/design-system/ThemeProvider';
import { ThemeToggle } from '../components/design-system/ThemeToggle';
import { 
  Accordion, 
  AccordionItemWrapper, 
  AccordionTrigger, 
  AccordionContent 
} from '../components/design-system/Accordion';
import { Tag } from '../components/design-system/Tag';
import { 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent 
} from '../components/design-system/Tabs';
import { 
  Sidebar, 
  SidebarHeader, 
  SidebarContent, 
  SidebarFooter, 
  SidebarTrigger, 
  SidebarItem, 
  SidebarGroup 
} from '../components/design-system/Sidebar';

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const tabFromUrl = queryParams.get('selectedTab');
  
  const [selectedTab, setSelectedTab] = useState(tabFromUrl || "colors");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  // Update URL when tab changes
  useEffect(() => {
    const newParams = new URLSearchParams(location.search);
    newParams.set('selectedTab', selectedTab);
    navigate({ search: newParams.toString() }, { replace: true });
  }, [selectedTab, navigate, location.search]);
  
  // Update selected tab when URL changes
  useEffect(() => {
    if (tabFromUrl) {
      setSelectedTab(tabFromUrl);
    }
  }, [tabFromUrl]);
  
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <div className="flex h-screen overflow-hidden">
          <Sidebar defaultCollapsed={sidebarCollapsed}>
            <SidebarHeader>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center text-primary-foreground">
                  DS
                </div>
                {!sidebarCollapsed && <span className="font-semibold">Design System</span>}
              </div>
            </SidebarHeader>
            
            <SidebarContent>
              <SidebarGroup label="Overview">
                <SidebarItem 
                  icon={<Home size={16} />} 
                  active={selectedTab === "colors"} 
                  onClick={() => setSelectedTab("colors")}
                >
                  Colors
                </SidebarItem>
                <SidebarItem 
                  icon={<BarChart size={16} />} 
                  active={selectedTab === "accordion"} 
                  onClick={() => setSelectedTab("accordion")}
                >
                  Accordion
                </SidebarItem>
                <SidebarItem 
                  icon={<Bell size={16} />} 
                  active={selectedTab === "tags"} 
                  onClick={() => setSelectedTab("tags")}
                >
                  Tags & Badges
                </SidebarItem>
                <SidebarItem 
                  icon={<LayoutDashboard size={16} />} 
                  active={selectedTab === "tabs"} 
                  onClick={() => setSelectedTab("tabs")}
                >
                  Tabs
                </SidebarItem>
              </SidebarGroup>
              
              <SidebarGroup label="Settings">
                <SidebarItem 
                  icon={<User size={16} />}
                  onClick={() => navigate('/documentation#accessibility')}
                >
                  Accessibility
                </SidebarItem>
                <SidebarItem 
                  icon={<Settings size={16} />}
                  onClick={() => navigate('/documentation#usage')}
                >
                  Usage Guidelines
                </SidebarItem>
              </SidebarGroup>
            </SidebarContent>
            
            <SidebarFooter>
              <SidebarItem 
                icon={<ChevronRight size={16} />}
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              >
                Collapse
              </SidebarItem>
            </SidebarFooter>
          </Sidebar>
          
          <div className="flex-1 overflow-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-semibold">Enterprise Design System</h1>
                <ThemeToggle />
              </div>
              
              <div className="space-y-8">
                {selectedTab === "colors" && (
                  <ColorTokensSection />
                )}
                
                {selectedTab === "accordion" && (
                  <AccordionSection />
                )}
                
                {selectedTab === "tags" && (
                  <TagsSection />
                )}
                
                {selectedTab === "tabs" && (
                  <TabsSection />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

const ColorTokensSection = () => {
  const navigate = useNavigate();
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Color System</h2>
        <p className="text-muted-foreground mb-6">
          Our token-based color system provides a consistent visual language across the application.
          All colors support both light and dark modes with appropriate contrast ratios for accessibility.
        </p>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Primary Colors</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ColorBox color="var(--color-primary)" name="Primary" />
          <ColorBox color="var(--color-primary-light)" name="Primary Light" />
          <ColorBox color="var(--color-primary-dark)" name="Primary Dark" />
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Secondary Colors</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ColorBox color="var(--color-secondary)" name="Secondary" />
          <ColorBox color="var(--color-secondary-light)" name="Secondary Light" />
          <ColorBox color="var(--color-secondary-dark)" name="Secondary Dark" />
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Tertiary Colors</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ColorBox color="var(--color-tertiary)" name="Tertiary" />
          <ColorBox color="var(--color-tertiary-light)" name="Tertiary Light" />
          <ColorBox color="var(--color-tertiary-dark)" name="Tertiary Dark" />
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Semantic Colors</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <ColorBox color="var(--color-success)" name="Success" />
          <ColorBox color="var(--color-warning)" name="Warning" />
          <ColorBox color="var(--color-error)" name="Error" />
          <ColorBox color="var(--color-info)" name="Info" />
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Neutral Colors</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          <ColorBox color="var(--color-neutral-50)" name="50" />
          <ColorBox color="var(--color-neutral-100)" name="100" />
          <ColorBox color="var(--color-neutral-200)" name="200" />
          <ColorBox color="var(--color-neutral-400)" name="400" />
          <ColorBox color="var(--color-neutral-700)" name="700" />
          <ColorBox color="var(--color-neutral-900)" name="900" />
        </div>
      </div>
      
      <div className="mt-8">
        <button 
          onClick={() => navigate('/documentation#color-system')}
          className="inline-flex items-center text-primary hover:underline"
        >
          View documentation <ArrowRight className="ml-1 h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

const ColorBox = ({ color, name }: { color: string, name: string }) => {
  return (
    <div className="rounded-md overflow-hidden border border-border">
      <div className="h-20" style={{ backgroundColor: color }}></div>
      <div className="p-2 text-sm">
        <div className="font-medium">{name}</div>
        <div className="text-xs text-muted-foreground">{color}</div>
      </div>
    </div>
  );
};

const AccordionSection = () => {
  const navigate = useNavigate();
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Accordion Component</h2>
        <p className="text-muted-foreground mb-6">
          Accordions display a list of high-level options that can expand/collapse to reveal more information.
        </p>
      </div>
      
      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Single Expansion</h3>
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
            
            <AccordionItemWrapper id="item-3">
              <AccordionTrigger>How to implement a design system?</AccordionTrigger>
              <AccordionContent>
                Start by defining your design tokens (colors, typography, spacing), then create core components, document everything thoroughly, and continuously maintain and update as needed.
              </AccordionContent>
            </AccordionItemWrapper>
          </Accordion>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Multiple Expansion</h3>
          <Accordion type="multiple" defaultExpanded={["faq-1"]}>
            <AccordionItemWrapper id="faq-1">
              <AccordionTrigger>How accessible is this design system?</AccordionTrigger>
              <AccordionContent>
                This design system is built with accessibility in mind, following WCAG guidelines, supporting keyboard navigation, screen readers, and maintaining appropriate contrast ratios.
              </AccordionContent>
            </AccordionItemWrapper>
            
            <AccordionItemWrapper id="faq-2">
              <AccordionTrigger>Is this design system responsive?</AccordionTrigger>
              <AccordionContent>
                Yes, all components are designed to work across different screen sizes and devices, from mobile phones to large desktop monitors.
              </AccordionContent>
            </AccordionItemWrapper>
            
            <AccordionItemWrapper id="faq-3">
              <AccordionTrigger>Can I customize this design system?</AccordionTrigger>
              <AccordionContent>
                Absolutely! The design system is built to be customizable. You can adjust color tokens, spacing, typography, and component behaviors to match your specific requirements.
              </AccordionContent>
            </AccordionItemWrapper>
          </Accordion>
        </div>
        
        <div className="mt-8">
          <button 
            onClick={() => navigate('/documentation#accordion')}
            className="inline-flex items-center text-primary hover:underline"
          >
            View documentation <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const TagsSection = () => {
  const [tags, setTags] = useState([
    "Design System", "Components", "React", "Accessibility"
  ]);
  const navigate = useNavigate();
  
  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Tags & Badges Component</h2>
        <p className="text-muted-foreground mb-6">
          Tags and badges are compact elements that represent attributes, metadata, or categories.
        </p>
      </div>
      
      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Tag Variants</h3>
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
          <h3 className="text-lg font-medium">Tag Sizes</h3>
          <div className="flex flex-wrap gap-2 items-center">
            <Tag size="sm" variant="primary">Small</Tag>
            <Tag size="md" variant="primary">Medium</Tag>
            <Tag size="lg" variant="primary">Large</Tag>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Removable Tags</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Tag 
                key={index} 
                variant={['primary', 'secondary', 'tertiary', 'info'][index % 4] as any} 
                removable 
                onRemove={() => removeTag(index)}
              >
                {tag}
              </Tag>
            ))}
          </div>
        </div>
        
        <div className="mt-8">
          <button 
            onClick={() => navigate('/documentation#tags')}
            className="inline-flex items-center text-primary hover:underline"
          >
            View documentation <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const TabsSection = () => {
  const navigate = useNavigate();
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Tabs Component</h2>
        <p className="text-muted-foreground mb-6">
          Tabs organize and allow navigation between groups of content that are related and at the same level of hierarchy.
        </p>
      </div>
      
      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Basic Tabs</h3>
          <Tabs defaultValue="overview" className="w-full">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="p-4 border rounded-md mt-2">
              <h4 className="font-medium mb-2">Overview Content</h4>
              <p className="text-muted-foreground">
                This is the overview tab content. It provides a general summary of the information.
              </p>
            </TabsContent>
            
            <TabsContent value="analytics" className="p-4 border rounded-md mt-2">
              <h4 className="font-medium mb-2">Analytics Content</h4>
              <p className="text-muted-foreground">
                This is the analytics tab content. It shows detailed metrics and data visualization.
              </p>
            </TabsContent>
            
            <TabsContent value="reports" className="p-4 border rounded-md mt-2">
              <h4 className="font-medium mb-2">Reports Content</h4>
              <p className="text-muted-foreground">
                This is the reports tab content. It contains generated reports and exportable data.
              </p>
            </TabsContent>
            
            <TabsContent value="settings" className="p-4 border rounded-md mt-2">
              <h4 className="font-medium mb-2">Settings Content</h4>
              <p className="text-muted-foreground">
                This is the settings tab content. It allows configuration of various parameters.
              </p>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="mt-8">
          <button 
            onClick={() => navigate('/documentation#tabs')}
            className="inline-flex items-center text-primary hover:underline"
          >
            View documentation <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
