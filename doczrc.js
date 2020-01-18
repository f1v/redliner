export default {
  title: '@f1v/redliner',
  description: 'Documentation and examples for redliner',
  typescript: true,
  dest: './lib',
  src: './src',
  menu: ['Home', 'Line', 'RedLiner'],
  notUseSpecifiers: true,
  filterComponents: files => files.filter(filepath => /[w-]*.(js|jsx|ts|tsx)$/.test(filepath)),
};
