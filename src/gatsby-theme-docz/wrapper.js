import * as React from 'react';
import { Helmet } from 'react-helmet-async';

const Wrapper = ({ children }) => (
  <React.Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <link rel="icon" type="image/png" href="https://i.imgur.com/LdzriR3.png" />
    </Helmet>
    {children}
  </React.Fragment>
);

export default Wrapper;
