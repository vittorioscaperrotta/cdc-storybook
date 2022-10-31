import React from 'react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
  disabled: false,
};

export const PrimaryDisabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
  disabled: true
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  label: 'Button',
  disabled: false
};

export const SecondaryDisabled = Template.bind({});
Secondary.args = {
  primary: false,
  label: 'Button',
  disabled: true
};

