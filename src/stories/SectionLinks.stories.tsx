import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { SectionLinks } from '@/components/SectionLinks';
import { AnimatePresence } from 'framer-motion';

export default {
  title: 'Components/SectionLinks',
  component: SectionLinks,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: StoryFn = (args) => (
  <AnimatePresence>
    <SectionLinks {...args} />
  </AnimatePresence>
);

export const Default = Template.bind({});
Default.args = {};