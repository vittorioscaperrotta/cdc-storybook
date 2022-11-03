import React from 'react';

import { Input } from './Input';

export default {
  title: 'Component/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Input',
  disabled: false,
  dark: false,
};

