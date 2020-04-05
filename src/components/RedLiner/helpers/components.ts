import { ComponentType } from 'react';
import InfoBox, { IInfoBoxProps } from '../../InfoBox/InfoBox';
import Line, { ILineProps } from '../../Line/Line';

export type ComponentsTypes = {
  InfoBox: ComponentType<IInfoBoxProps>;
  Line: ComponentType<ILineProps>;
};

export const defaultComponents = {
  InfoBox,
  Line,
};

export const getCurrentComponents = (providedComponents?: ComponentsTypes) => ({
  ...defaultComponents,
  ...providedComponents,
});
