import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { About } from '@/components/About';
import { AnimatePresence } from 'framer-motion';

export default {
  title: 'Components/About',
  component: About,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: StoryFn = (args) => (
  <AnimatePresence>
    <About {...args} />
  </AnimatePresence>
);

export const Default = Template.bind({});
Default.args = {};