import React from 'react';
import { addons } from '@storybook/addons';
import { useChannel } from '@storybook/api';
import { AddonPanel } from '@storybook/components';

// Creates a new panel on the storybook (altho we may just use the Knobs panel)

const MyPanel = () => {
  const emit = useChannel({
    STORY_RENDERED: id => {
      /* do something */
    },
    'my-event-type': (...args) => {
      console.log('ok', ...args);
    },
    STORY_CHANGED: (...args) => console.log(...args),
  });

  return <button onClick={() => emit('my-event-type', { some: 'data' })}>click to emit</button>;
};

addons.register('my/addon', api => {
  addons.addPanel('my/addon/panel', {
    title: 'My Addon',
    render: ({ active, key }) => (
      <AddonPanel key={key} active={active}>
        <MyPanel />
      </AddonPanel>
    ),
  });
});
