
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { 
  Accordion, 
  AccordionItemWrapper,
  AccordionTrigger, 
  AccordionContent 
} from '../components/design-system/Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Design System/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const SingleAccordion: Story = {
  args: {
    type: 'single',
    defaultExpanded: ['item-1'],
  },
  render: (args) => (
    <div className="w-96">
      <Accordion {...args}>
        <AccordionItemWrapper id="item-1">
          <AccordionTrigger>What is an accordion?</AccordionTrigger>
          <AccordionContent>
            An accordion is a vertically stacked set of interactive headings that each reveal a section of content.
          </AccordionContent>
        </AccordionItemWrapper>
        
        <AccordionItemWrapper id="item-2">
          <AccordionTrigger>When to use accordions?</AccordionTrigger>
          <AccordionContent>
            Use accordions to organize related information in a limited space. This component is ideal when users need to focus on specific content without being overwhelmed by all information at once.
          </AccordionContent>
        </AccordionItemWrapper>
        
        <AccordionItemWrapper id="item-3">
          <AccordionTrigger>Accessibility considerations</AccordionTrigger>
          <AccordionContent>
            Our accordion implements ARIA attributes for screen reader compatibility, supports keyboard navigation, and maintains visual focus indicators for enhanced accessibility.
          </AccordionContent>
        </AccordionItemWrapper>
      </Accordion>
    </div>
  ),
};

export const MultipleAccordion: Story = {
  args: {
    type: 'multiple',
    defaultExpanded: ['item-1', 'item-3'],
  },
  render: (args) => (
    <div className="w-96">
      <Accordion {...args}>
        <AccordionItemWrapper id="item-1">
          <AccordionTrigger>First section</AccordionTrigger>
          <AccordionContent>
            This is the first section's content. Multiple sections can be open simultaneously in this variant.
          </AccordionContent>
        </AccordionItemWrapper>
        
        <AccordionItemWrapper id="item-2">
          <AccordionTrigger>Second section</AccordionTrigger>
          <AccordionContent>
            This is the second section's content. Try opening this while others are already open.
          </AccordionContent>
        </AccordionItemWrapper>
        
        <AccordionItemWrapper id="item-3">
          <AccordionTrigger>Third section</AccordionTrigger>
          <AccordionContent>
            This is the third section's content. The multiple type allows for a more flexible content experience.
          </AccordionContent>
        </AccordionItemWrapper>
      </Accordion>
    </div>
  ),
};
