import React from 'react';

import { Tile } from '../components/Tile/Tile';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Components/Tile',
  component: Tile,
};

const Template = (args) => <Tile {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  dark: false,
  title: "Titolo",
  message: "Descrizione",
  buttonAction: 'Tile',
  disabled: false,
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  dark: false,
  disabled: true,
  title: "Titolo",
  message: "Descrizione",
  buttonAction: 'Tile',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  dark: false,
  title: "Titolo",
  message: "Descrizione",
  buttonAction: 'Tile',
  icon: true,
  disabled: false,
};

export const WithImage = Template.bind({});
WithImage.args = {
  dark: false,
  title: "Titolo",
  message: "Descrizione",
  buttonAction: 'Tile',
  disabled: false,
  imgTitle: "/assets/logo-pagopa_blue.svg",
};


