import React from 'react';

import { Icon } from '../components/Icon/Icon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Components/Atoms/Icon',
  component: Icon,
  argTypes: { }, //add action to canvas
};

const Template = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "nexi-delete-group",
  size: "50px",
  color: "#2d32aa"
};
