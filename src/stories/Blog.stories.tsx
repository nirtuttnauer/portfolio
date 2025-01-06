import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { default as Blog } from '@/pages/blog';
import { AnimatePresence } from 'framer-motion';

export default {
  title: 'Pages/Blog',
  component: Blog,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: StoryFn = (args) => (
  <AnimatePresence>
    <Blog {...args} />
  </AnimatePresence>
);

export const Default = Template.bind({});
Default.args = {};