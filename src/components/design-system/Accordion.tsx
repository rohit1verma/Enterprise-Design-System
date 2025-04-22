
import React, { createContext, useContext, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';

// === Types ===
type AccordionContextType = {
  expanded: Record<string, boolean>;
  toggle: (id: string) => void;
  type: 'single' | 'multiple';
};

interface AccordionProps {
  children: React.ReactNode;
  type?: 'single' | 'multiple';
  className?: string;
  defaultExpanded?: string[];
}

interface AccordionItemProps {
  children: React.ReactNode;
  className?: string;
  id: string;
}

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
}

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

// === Context ===
const AccordionContext = createContext<AccordionContextType>({
  expanded: {},
  toggle: () => {},
  type: 'single',
});

// === Components ===
export function Accordion({
  children,
  type = 'single',
  className,
  defaultExpanded = [],
}: AccordionProps) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>(
    defaultExpanded.reduce((acc, id) => ({ ...acc, [id]: true }), {})
  );

  const toggle = (id: string) => {
    setExpanded((prev) => {
      // For single type, close all others
      if (type === 'single') {
        return { [id]: !prev[id] };
      }
      
      // For multiple type, toggle just this one
      return { ...prev, [id]: !prev[id] };
    });
  };

  return (
    <AccordionContext.Provider value={{ expanded, toggle, type }}>
      <div className={cn('space-y-1', className)} data-accordion-type={type}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({ children, className, id }: AccordionItemProps) {
  return (
    <div 
      className={cn('border border-border rounded-md overflow-hidden', className)} 
      data-accordion-item 
      data-state="closed"
      id={`accordion-item-${id}`}
    >
      {children}
    </div>
  );
}

export function AccordionTrigger({ children, className }: AccordionTriggerProps) {
  const { expanded, toggle } = useContext(AccordionContext);
  const itemId = React.useContext(ItemIdContext);
  
  const isExpanded = expanded[itemId] || false;

  return (
    <button
      type="button"
      onClick={() => toggle(itemId)}
      className={cn(
        'flex w-full justify-between items-center p-4 font-medium transition-all focus-ring',
        isExpanded && 'bg-muted/50',
        className
      )}
      aria-expanded={isExpanded}
      aria-controls={`accordion-content-${itemId}`}
      data-state={isExpanded ? 'open' : 'closed'}
    >
      <span>{children}</span>
      <ChevronDown 
        className={cn(
          'h-4 w-4 transition-transform duration-200', 
          isExpanded ? 'rotate-180' : 'rotate-0'
        )}
      />
    </button>
  );
}

export function AccordionContent({ children, className }: AccordionContentProps) {
  const { expanded } = useContext(AccordionContext);
  const itemId = React.useContext(ItemIdContext);
  
  const isExpanded = expanded[itemId] || false;

  return (
    <div
      id={`accordion-content-${itemId}`}
      className={cn(
        "overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        isExpanded ? "h-auto" : "h-0",
        className
      )}
      aria-hidden={!isExpanded}
      data-state={isExpanded ? "open" : "closed"}
    >
      <div className="p-4 pt-0">{children}</div>
    </div>
  );
}

// Context for sharing the id between AccordionItem and its children
const ItemIdContext = createContext('');

export function AccordionItemWrapper({ children, id, ...props }: AccordionItemProps) {
  return (
    <ItemIdContext.Provider value={id}>
      <AccordionItem id={id} {...props}>
        {children}
      </AccordionItem>
    </ItemIdContext.Provider>
  );
}
