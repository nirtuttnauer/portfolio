import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { SocialLinks } from '@/components/SocialLinks';
import { AnimatePresence } from 'framer-motion';

export default {
  title: 'Components/SocialLinks',
  component: SocialLinks,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: StoryFn = (args) => (
  <AnimatePresence>
    <SocialLinks {...args} />
  </AnimatePresence>
);

export const Default = Template.bind({});
Default.args = {};