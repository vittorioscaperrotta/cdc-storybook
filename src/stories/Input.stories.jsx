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
  label: 'Label',
  disabled: false,
  dark: false,
  type: 'text',
};


export const PrimaryWithValue = Template.bind({});
// Onclick-Typing
PrimaryWithValue.args = {
  label: 'Label',
  disabled: false,
  dark: false,
  type: 'text',
};

export const Error = Template.bind({});
Error.args = {
  label: 'Label',
  disabled: false,
  dark: false,
  error: true,
  errorLabel: 'Error',
  type: 'text',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Label',
  disabled: true,
  dark: false,
  type: 'text',
};

export const DisabledWithValue = Template.bind({});
DisabledWithValue.args = {
  label: 'Label',
  disabled: true,
  dark: false,
  type: 'text',
};

export const PrimaryOnlyRead = Template.bind({});
// Only read
PrimaryOnlyRead.args = {
  label: 'Label',
  disabled: false,
  dark: false,
  onlyRead: true,
  type: 'text',
};

export const PrimaryDark = Template.bind({});
//Empty
PrimaryDark.args = {
  label: '',
  disabled: false,
  dark: true,
  type: 'text',
};

export const PrimaryWithValueDark = Template.bind({});
// Onclick-Typing
PrimaryWithValueDark.args = {
  label: 'Label',
  disabled: false,
  dark: true,
  type: 'text',
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
  label: 'Label',
  disabled: false,
  dark: true,
  error: true,
  type: 'text',
  errorLabel: 'Error',
};

export const DisabledDark = Template.bind({});
DisabledDark.args = {
  label: 'Label',
  disabled: true,
  dark: true,
  type: 'text',
};

export const DisabledWithValueDark = Template.bind({});
DisabledWithValueDark.args = {
  label: 'Label',
  disabled: true,
  dark: true,
  type: 'text',
};

export const PrimaryOnlyReadDark = Template.bind({});
// Only read
PrimaryOnlyReadDark.args = {
  label: 'Label',
  disabled: false,
  dark: true,
  onlyRead: true,
  type: 'text',
};


PrimaryDark.parameters = {
  backgrounds: { default: 'dark' },
};

PrimaryWithValueDark.parameters = {
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

PrimaryOnlyReadDark.parameters = {
  backgrounds: { default: 'dark' },
};