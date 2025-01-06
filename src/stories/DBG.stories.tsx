import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DBG from '@/components/DBG';
import { AnimatePresence } from 'framer-motion';

export default {
  title: 'Components/DBG',
  component: DBG,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: StoryFn = (args) => (
  <AnimatePresence>
    <DBG {...args} />
  </AnimatePresence>
);

export const Default = Template.bind({});
Default.args = {};