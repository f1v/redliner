import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import RedlinerAddon from '../index';
import RedLiner from 'react-redliner';

// This is working to conditionally redliner using a boolean knob
// However, attempting to use RedlinerAddon as decorator

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs, RedlinerAddon],
};

export const Test = () => {
  const showRedliner = boolean('Show Redliner', true);

  const testButton = (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        Click me
      </span>
    </Button>
  );

  return showRedliner ? <RedLiner>{testButton}</RedLiner> : testButton;
};
