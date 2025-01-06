import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Contact } from '@/components/Contact';
import { AnimatePresence } from 'framer-motion';

export default {
  title: 'Components/Contact',
  component: Contact,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: StoryFn = (args) => (
  <AnimatePresence>
    <Contact {...args} />
  </AnimatePresence>
);

export const Default = Template.bind({});
Default.args = {};