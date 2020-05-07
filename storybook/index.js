import React from 'react';
import addons, { makeDecorator } from '@storybook/addons';
import RedLiner from 'react-redliner';

// Exports an add-on which we can import and add to 'decorators'

export default makeDecorator({
  name: 'Redliner',
  parameterName: 'myParameter',
  // Set this to false to show Redliner on all stories
  skipIfNoParametersOrOptions: true,
  wrapper: (getStory, context, { parameters }) => {
    const channel = addons.getChannel();

    channel.emit('my/customEvent', parameters);

    channel.on('my-event-type', () => {
      return <RedLiner>{getStory(context)}</RedLiner>;
    });

    return <RedLiner>{getStory(context)}</RedLiner>;
  },
});
