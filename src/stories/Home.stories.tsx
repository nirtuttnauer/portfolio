import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Home from '@/pages/index';
import { AnimatePresence } from 'framer-motion';

export default {
  title: 'Pages/Home',
  component: Home,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: StoryFn = (args) => (
  <AnimatePresence>
    <Home {...args} />
  </AnimatePresence>
);

export const Default = Template.bind({});
Default.args = {};