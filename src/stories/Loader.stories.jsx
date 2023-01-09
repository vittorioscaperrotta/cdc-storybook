import React from 'react';

import { Loader } from '../components/Loader/Loader';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Components/Atoms/Loader',
  component: Loader,
  argTypes: {
  }, //add action to canvas
};

const Template = (args) => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {
  dark: false,
};

export const Dark = Template.bind({});
Dark.args = {
  dark: true,
};

Dark.parameters = {
  backgrounds: {
    default: 'dark'
  },
};
