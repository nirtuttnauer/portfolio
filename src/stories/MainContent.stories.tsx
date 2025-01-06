import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { MainContent } from '@/components/MainContent';
import { AnimatePresence } from 'framer-motion';

export default {
  title: 'Components/MainContent',
  component: MainContent,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: StoryFn = (args) => (
  <AnimatePresence>
    <MainContent {...args} />
  </AnimatePresence>
);

export const Default = Template.bind({});
Default.args = {};