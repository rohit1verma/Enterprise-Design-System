
import React, { createContext, useContext, useState } from "react";
import { cn } from "../../lib/utils";

// === Types ===
type TabsContextType = {
  activeTab: string;
  setActiveTab: (id: string) => void;
  orientation: "horizontal" | "vertical";
};

interface TabsProps {
  children: React.ReactNode;
  defaultValue: string;
  className?: string;
  orientation?: "horizontal" | "vertical";
  onChange?: (id: string) => void;
}

interface TabsListProps {
  children: React.ReactNode;
  className?: string;
}

interface TabsTriggerProps {
  children: React.ReactNode;
  value: string;
  className?: string;
  disabled?: boolean;
}

interface TabsContentProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

// === Context ===
const TabsContext = createContext<TabsContextType>({
  activeTab: "",
  setActiveTab: () => {},
  orientation: "horizontal",
});

// === Components ===
export function Tabs({ children, defaultValue, className, orientation = "horizontal", onChange }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab: handleTabChange, orientation }}>
      <div 
        className={cn(
          orientation === "vertical" ? "flex gap-4" : "", 
          className
        )} 
        data-orientation={orientation}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children, className }: TabsListProps) {
  const { orientation } = useContext(TabsContext);
  
  return (
    <div
      role="tablist"
      className={cn(
        "inline-flex items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
        orientation === "vertical" 
          ? "flex-col h-auto w-auto items-stretch" 
          : "h-10",
        className
      )}
      data-orientation={orientation}
    >
      {children}
    </div>
  );
}

export function TabsTrigger({
  children,
  value,
  className,
  disabled = false,
}: TabsTriggerProps) {
  const { activeTab, setActiveTab, orientation } = useContext(TabsContext);
  const isActive = activeTab === value;

  return (
    <button
      role="tab"
      type="button"
      aria-selected={isActive}
      aria-controls={`tabpanel-${value}`}
      data-state={isActive ? "active" : "inactive"}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        orientation === "vertical" ? "justify-start w-full" : "",
        isActive
          ? "bg-background text-foreground shadow-sm"
          : "hover:bg-background/50 hover:text-foreground",
        className
      )}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  );
}

export function TabsContent({
  children,
  value,
  className,
}: TabsContentProps) {
  const { activeTab, orientation } = useContext(TabsContext);
  const isActive = activeTab === value;

  if (!isActive) return null;

  return (
    <div
      role="tabpanel"
      id={`tabpanel-${value}`}
      data-state={isActive ? "active" : "inactive"}
      className={cn(
        orientation === "vertical" ? "flex-1" : "mt-2",
        "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
      tabIndex={0}
    >
      {children}
    </div>
  );
}
