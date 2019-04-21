import { css } from 'docz-plugin-css';

export default {
  title: '@f1v/redliner',
  description: 'This is my awesome documentation',
  dest: './lib',
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
  typescript: true,
  notUseSpecifiers: true,
  filterComponents: (files) =>
    files.filter(filepath => /[w-]*.(js|jsx|ts|tsx)$/.test(filepath))
}