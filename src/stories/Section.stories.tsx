import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Section from '@/components/Section';
import { AnimatePresence } from 'framer-motion';
import { experienceData } from '@/data/exp';
import { projectsData } from '@/data/proj';

export default {
  title: 'Components/Section',
  component: Section,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: StoryFn = (args) => (
  <AnimatePresence>
    <Section title={'experience'} data={experienceData} {...args} />
  </AnimatePresence>
);

export const Default = Template.bind({});
Default.args = {
  title: 'experience',
  data: experienceData,
};

export const Education = Template.bind({});
Education.args = {
  title: 'education',
  data: experienceData,
};

export const Projects = Template.bind({});
Projects.args = {
  title: 'projects',
  data: projectsData,
};