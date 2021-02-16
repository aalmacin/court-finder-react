import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Accordion, AccordionProps } from './Accordion';
import { loremIpsumLong } from './__mocks__/loremIpsum';

export default {
  title: 'App/Accordion',
  component: Accordion,
  args: {
    header: 'Accordion'
  }
} as Meta;

const Template: Story<AccordionProps> = (args) => (
  <Accordion {...args}>{loremIpsumLong}</Accordion>
);

export const Default = Template.bind({});

export const Expanded = Template.bind({});
Expanded.args = {
  header: 'Accordion Expanded',
  defaultExpanded: true
};
