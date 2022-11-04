import React from 'react';

import { Input } from './Input';

export default {
  title: 'Component/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
//Empty
Primary.args = {
  label: '',
  disabled: false,
  dark: false,
};

export const PrimaryWithLabel = Template.bind({});
// Onclick-Typing
PrimaryWithLabel.args = {
  label: 'Label',
  value: 'Lorem ipsum dolor',
  disabled: false,
  dark: false,
};

export const Error = Template.bind({});
Error.args = {
  label: 'Label',
  value: 'Lorem ipsum dolor',
  disabled: false,
  dark: false,
  error: true,
  errorLabel: 'Error',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Label',
  disabled: true,
  dark: false,
};

export const DisabledWithValue = Template.bind({});
DisabledWithValue.args = {
  label: 'Label',
  value: 'Lorem ipsum dolor',
  disabled: true,
  dark: false,
};

export const PrimaryDark = Template.bind({});
//Empty
PrimaryDark.args = {
  label: '',
  disabled: false,
  dark: true,
};

export const PrimaryWithLabelDark = Template.bind({});
// Onclick-Typing
PrimaryWithLabelDark.args = {
  label: 'Label',
  value: 'Lorem ipsum dolor',
  disabled: false,
  dark: true,
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
  label: 'Label',
  value: 'Lorem ipsum dolor',
  disabled: false,
  dark: true,
  error: true,
  errorLabel: 'Error',
};

export const DisabledDark = Template.bind({});
DisabledDark.args = {
  label: 'Label',
  disabled: true,
  dark: true,
};

export const DisabledWithValueDark = Template.bind({});
DisabledWithValueDark.args = {
  label: 'Label',
  value: 'Lorem ipsum dolor',
  disabled: true,
  dark: true,
};


PrimaryDark.parameters = {
  backgrounds: { default: 'dark' },
};

PrimaryWithLabelDark.parameters = {
  backgrounds: { default: 'dark' },
};

ErrorDark.parameters = {
  backgrounds: { default: 'dark' },
};

DisabledDark.parameters = {
  backgrounds: { default: 'dark' },
};

DisabledWithValueDark.parameters = {
  backgrounds: { default: 'dark' },
};