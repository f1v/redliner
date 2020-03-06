export type dimensionType = 'height' | 'info' | 'width';

export interface Config {
  color?: string;
  displayOpts?: dimensionType[] | 'all';
  infoOpts?: string[];
}

const DEFAULT_CONFIG = {
  color: 'red',
  displayOpts: 'all',
};

export const getConfig = (providedConfig: Config | undefined) =>
  Object.assign({}, DEFAULT_CONFIG, providedConfig || {});
