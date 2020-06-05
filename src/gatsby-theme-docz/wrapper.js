import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Global, css } from '@emotion/core';

const Wrapper = ({ children }) => (
  <React.Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <link rel="icon" type="image/png" href="https://i.imgur.com/LdzriR3.png" />
    </Helmet>
    <Global
      styles={css`
        // Increase size of docz's Playgrounds
        div[data-testid='live-preview'] {
          padding: 44px 0 44px 30px;
        }

        // Prevent overflowing text in prop table
        div[data-testid='prop-type'] {
          max-width: 80%;
        }
      `}
    />
    {children}
  </React.Fragment>
);

export default Wrapper;
