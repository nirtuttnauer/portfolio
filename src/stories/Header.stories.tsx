import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Header } from '@/components/Header';
import { AnimatePresence } from 'framer-motion';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: StoryFn = (args) => (
  <AnimatePresence>
    <Header {...args} />
  </AnimatePresence>
);

export const Default = Template.bind({});
Default.args = {};