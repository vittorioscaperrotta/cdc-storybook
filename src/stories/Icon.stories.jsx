import React from 'react';

import { Icon } from './Icon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Components/Icon',
  component: Icon,
  argTypes: { onClick: { action: 'clicked' } }, //add action to canvas
};

const Template = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "delete-group",
  size: "large",
  color: "primary"
};