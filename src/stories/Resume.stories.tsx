import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Resume } from '@/components/Resume';
import { AnimatePresence } from 'framer-motion';

export default {
  title: 'Components/Resume',
  component: Resume,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: StoryFn = (args) => (
  <AnimatePresence>
    <Resume {...args} />
  </AnimatePresence>
);

export const Default = Template.bind({});
Default.args = {};