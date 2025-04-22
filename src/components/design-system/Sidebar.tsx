
import React, { createContext, useContext, useState } from "react";
import { ChevronLeft, Menu } from "lucide-react";
import { cn } from "../../lib/utils";

// === Types ===
type SidebarContextType = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  toggleCollapse: () => void;
};

interface SidebarProps {
  children: React.ReactNode;
  defaultCollapsed?: boolean;
  className?: string;
}

interface SidebarHeaderProps {
  children?: React.ReactNode;
  className?: string;
}

interface SidebarContentProps {
  children: React.ReactNode;
  className?: string;
}

interface SidebarFooterProps {
  children?: React.ReactNode;
  className?: string;
}

interface SidebarTriggerProps {
  className?: string;
}

interface SidebarItemProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

interface SidebarGroupProps {
  children: React.ReactNode;
  label?: string;
  className?: string;
}

// === Context ===
const SidebarContext = createContext<SidebarContextType>({
  collapsed: false,
  setCollapsed: () => {},
  toggleCollapse: () => {},
});

// === Components ===
export function Sidebar({
  children,
  defaultCollapsed = false,
  className,
}: SidebarProps) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  const toggleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <SidebarContext.Provider
      value={{ collapsed, setCollapsed, toggleCollapse }}
    >
      <aside
        className={cn(
          "flex flex-col border-r border-border bg-card text-card-foreground transition-all duration-300 ease-in-out",
          collapsed ? "w-16" : "w-64",
          className
        )}
        data-state={collapsed ? "collapsed" : "expanded"}
      >
        {children}
      </aside>
    </SidebarContext.Provider>
  );
}

export function SidebarHeader({ children, className }: SidebarHeaderProps) {
  return (
    <div
      className={cn(
        "flex h-14 items-center border-b border-border px-3 py-2",
        className
      )}
    >
      {children}
    </div>
  );
}

export function SidebarContent({ children, className }: SidebarContentProps) {
  return (
    <div className={cn("flex-1 overflow-auto p-2", className)}>
      {children}
    </div>
  );
}

export function SidebarFooter({ children, className }: SidebarFooterProps) {
  return (
    <div
      className={cn(
        "border-t border-border p-2",
        className
      )}
    >
      {children}
    </div>
  );
}

export function SidebarTrigger({ className }: SidebarTriggerProps) {
  const { collapsed, toggleCollapse } = useContext(SidebarContext);

  return (
    <button
      type="button"
      onClick={toggleCollapse}
      className={cn(
        "flex h-8 w-8 items-center justify-center rounded-md border border-border hover:bg-accent transition-standard focus-ring",
        className
      )}
      aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
    >
      {collapsed ? (
        <Menu className="h-4 w-4" />
      ) : (
        <ChevronLeft className="h-4 w-4" />
      )}
    </button>
  );
}

export function SidebarItem({
  children,
  icon,
  className,
  active = false,
  disabled = false,
  onClick,
}: SidebarItemProps) {
  const { collapsed } = useContext(SidebarContext);

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "group flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-standard focus-ring",
        active
          ? "bg-accent text-accent-foreground"
          : "text-foreground/70 hover:bg-accent/50 hover:text-accent-foreground",
        disabled && "pointer-events-none opacity-50",
        className
      )}
    >
      {icon && (
        <span
          className={cn(
            "mr-2 h-4 w-4",
            collapsed && "mr-0"
          )}
        >
          {icon}
        </span>
      )}
      {!collapsed && <span>{children}</span>}
      {collapsed && (
        <span className="sr-only">{children}</span>
      )}
    </button>
  );
}

export function SidebarGroup({
  children,
  label,
  className,
}: SidebarGroupProps) {
  const { collapsed } = useContext(SidebarContext);

  return (
    <div className={cn("mb-2", className)}>
      {label && !collapsed && (
        <h4 className="mb-1 px-2 text-xs font-semibold uppercase text-muted-foreground">
          {label}
        </h4>
      )}
      {label && collapsed && (
        <h4 className="sr-only">{label}</h4>
      )}
      <div className="space-y-1">{children}</div>
    </div>
  );
}
