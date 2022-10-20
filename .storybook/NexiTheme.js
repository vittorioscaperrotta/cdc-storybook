import { create } from '@storybook/theming';

export default create({
  base: 'light',
  brandTitle: 'Nexi storybook',
  brandUrl: 'https://www.nexi.it',
  brandImage: '../asset/theme/Nexi_Logo.png',
  brandTarget: '_self',

  // Typography
  fontBase: '"Karbon-semibold", sans-serif',
  fontCode: 'monospace'
});
