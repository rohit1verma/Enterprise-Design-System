
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

const Playground = () => {
  const [selectedTab, setSelectedTab] = useState("accordion");
  const [tags, setTags] = useState([
    "Design System", "Components", "React", "TypeScript", "Accessibility"
  ]);
  
  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleTabChange = (tabValue: string) => {
    setSelectedTab(tabValue);
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
              <Link to="/documentation" className="text-muted-foreground hover:text-foreground transition-colors">
                Documentation
              </Link>
              <Link to="/playground" className="text-foreground font-medium">
                Playground
              </Link>
            </nav>
            
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container py-12">
        <h1 className="text-3xl font-bold mb-8">Component Playground</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          Experiment with our components live in this interactive playground. Adjust properties and see how components behave with different configurations.
        </p>
        
        <div className="mb-8">
          <Tabs defaultValue={selectedTab} onChange={handleTabChange}>
            <TabsList>
              <TabsTrigger value="accordion">Accordion</TabsTrigger>
              <TabsTrigger value="tags">Tags</TabsTrigger>
              <TabsTrigger value="tabs">Tabs</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar with Controls */}
          <div className="lg:col-span-1 space-y-8 order-2 lg:order-1">
            <div className="border border-border rounded-lg p-6 space-y-4">
              <h3 className="text-lg font-medium mb-2">Component Controls</h3>
              
              {selectedTab === "accordion" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Accordion Type</label>
                    <select className="w-full p-2 border border-input rounded-md bg-background">
                      <option>Single</option>
                      <option>Multiple</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Default Expanded</label>
                    <select className="w-full p-2 border border-input rounded-md bg-background">
                      <option>None</option>
                      <option>Item 1</option>
                      <option>Item 2</option>
                      <option>Item 3</option>
                    </select>
                  </div>
                  
                  <Button className="w-full">Apply Changes</Button>
                </div>
              )}
              
              {selectedTab === "tags" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Tag Size</label>
                    <select className="w-full p-2 border border-input rounded-md bg-background">
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Variant</label>
                    <select className="w-full p-2 border border-input rounded-md bg-background">
                      <option>Default</option>
                      <option>Primary</option>
                      <option>Secondary</option>
                      <option>Tertiary</option>
                      <option>Success</option>
                      <option>Warning</option>
                      <option>Error</option>
                      <option>Info</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Removable</label>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="removable" className="rounded border-input" />
                      <label htmlFor="removable">Enable removal</label>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">New Tag</label>
                    <div className="flex">
                      <input type="text" className="flex-1 p-2 border border-input rounded-l-md bg-background" placeholder="Tag text" />
                      <Button className="rounded-l-none">Add</Button>
                    </div>
                  </div>
                </div>
              )}
              
              {selectedTab === "tabs" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Default Tab</label>
                    <select className="w-full p-2 border border-input rounded-md bg-background">
                      <option>Tab 1</option>
                      <option>Tab 2</option>
                      <option>Tab 3</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Orientation</label>
                    <select className="w-full p-2 border border-input rounded-md bg-background">
                      <option>Horizontal</option>
                      <option>Vertical</option>
                    </select>
                  </div>
                  
                  <Button className="w-full">Apply Changes</Button>
                </div>
              )}
            </div>
            
            <div className="border border-border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-4">Code</h3>
              <div className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                {selectedTab === "accordion" && 
                  `<Accordion type="single" defaultExpanded={["item-1"]}>\n  <AccordionItemWrapper id="item-1">\n    <AccordionTrigger>Title 1</AccordionTrigger>\n    <AccordionContent>Content 1</AccordionContent>\n  </AccordionItemWrapper>\n</Accordion>`
                }
                {selectedTab === "tags" && 
                  `<Tag variant="primary" size="md" removable>\n  Design System\n</Tag>`
                }
                {selectedTab === "tabs" && 
                  `<Tabs defaultValue="tab1">\n  <TabsList>\n    <TabsTrigger value="tab1">Tab 1</TabsTrigger>\n    <TabsTrigger value="tab2">Tab 2</TabsTrigger>\n  </TabsList>\n  <TabsContent value="tab1">Content 1</TabsContent>\n  <TabsContent value="tab2">Content 2</TabsContent>\n</Tabs>`
                }
              </div>
            </div>
          </div>
          
          {/* Preview Area */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="border border-border rounded-lg p-8 min-h-[400px] flex flex-col items-center justify-center">
              <h3 className="text-lg font-medium mb-6 self-start">Preview</h3>
              
              {selectedTab === "accordion" && (
                <div className="w-full max-w-md">
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
              )}
              
              {selectedTab === "tags" && (
                <div className="w-full space-y-8">
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <Tag 
                        key={index} 
                        variant={['primary', 'secondary', 'tertiary', 'info', 'success', 'warning', 'error'][index % 7] as any} 
                        removable 
                        onRemove={() => removeTag(index)}
                      >
                        {tag}
                      </Tag>
                    ))}
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-medium">Tag Variants</h4>
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
                    <h4 className="font-medium">Tag Sizes</h4>
                    <div className="flex flex-wrap gap-2 items-center">
                      <Tag size="sm" variant="primary">Small</Tag>
                      <Tag size="md" variant="primary">Medium</Tag>
                      <Tag size="lg" variant="primary">Large</Tag>
                    </div>
                  </div>
                </div>
              )}
              
              {selectedTab === "tabs" && (
                <div className="w-full max-w-xl">
                  <Tabs defaultValue="overview">
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
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border mt-12">
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

export default Playground;
