import React from 'react';

import { Button } from '../components/Button/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Components/Atoms/Button',
  component: Button,
  argTypes: {
    onClick: {
      action: 'clicked'
    }
  }, //add action to canvas
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
  disabled: false,
  dark: false,
  loading: false,
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  primary: true,
  label: 'Button',
  disabled: true,
  dark: false,
  loading: false,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  primary: true,
  label: 'Button',
  disabled: false,
  dark: true,
  loading: false,
};

PrimaryDark.parameters = {
  backgrounds: {
    default: 'dark'
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  label: 'Button',
  disabled: false,
  dark: false,
  loading: false,
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  primary: false,
  label: 'Button',
  disabled: true,
  dark: false,
  loading: false,
};

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  primary: false,
  label: 'Button',
  disabled: false,
  dark: true,
  loading: false,
};

SecondaryDark.parameters = {
  backgrounds: {
    default: 'dark'
  },
};

