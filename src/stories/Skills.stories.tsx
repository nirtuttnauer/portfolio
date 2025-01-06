import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Skills } from '@/components/Skills';
import { AnimatePresence } from 'framer-motion';

export default {
  title: 'Components/Skills',
  component: Skills,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: StoryFn = (args) => (
  <AnimatePresence>
    <Skills {...args} />
  </AnimatePresence>
);

export const Default = Template.bind({});
Default.args = {};