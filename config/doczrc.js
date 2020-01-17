import { css } from 'docz-plugin-css';

export default {
  title: '@f1v/redliner',
  description: 'Documentation and examples for redliner',
  dest: './docz/dist',
  plugins: [
    css({
      preprocessor: 'sass',
      cssmodules: true,
    }),
  ],
  src: './src',
  themeConfig: {
    // mode: 'dark',
    colors: {
      primary: '#f65e23',
    },
    styles: {
      body: css`
        font-family: Roboto, sans-serif;
      `,
      h1: css`
        font-family: Roboto;
      `,
    },
  },
  menu: ['Home', 'Line', 'RedLiner'],
  typescript: true,
  notUseSpecifiers: true,
  filterComponents: files => files.filter(filepath => /[w-]*.(js|jsx|ts|tsx)$/.test(filepath)),
};
