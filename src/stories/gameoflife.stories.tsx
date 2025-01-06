import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import GameOfLife from '@/components/gameoflife';
import { AnimatePresence } from 'framer-motion';

export default {
  title: 'Games/Gameoflife',
  component: GameOfLife,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: StoryFn = (args) => (
  <AnimatePresence>
    <GameOfLife {...args} />
  </AnimatePresence>
);

export const Default = Template.bind({});
Default.args = {};