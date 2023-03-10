import { ComponentStory, ComponentMeta } from '@storybook/react';

import Badge from '.';

export default {
  title: 'Badge',
  component: Badge,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Badge>;

const DUMMY_STRING = 'Javascript';

const Template: ComponentStory<typeof Badge> = (args) => (
  <Badge {...args}>{DUMMY_STRING}</Badge>
);

export const SmallFilled = Template.bind({});
SmallFilled.args = {
  filled: true,
};

export const Small = Template.bind({});
Small.args = {
  filled: false,
};

export const SmallWithoutOutline = Template.bind({});
SmallWithoutOutline.args = {};

export const LargeFilled = Template.bind({});
LargeFilled.args = {
  filled: true,
  size: 'large',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  filled: false,
};

export const LargeWithoutOutline = Template.bind({});
LargeWithoutOutline.args = {
  size: 'large',
};
