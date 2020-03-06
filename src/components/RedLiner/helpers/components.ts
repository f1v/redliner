import { ComponentType } from 'react';
import InfoBox, { IInfoBoxProps } from '../../InfoBox/InfoBox';

export type ComponentsConfig = {
  InfoBox: ComponentType<IInfoBoxProps>;
};

export const defaultComponents = {
  InfoBox,
};

export const getCurrentComponents = (providedComponents?: ComponentsConfig) => ({
  ...defaultComponents,
  ...providedComponents,
});
