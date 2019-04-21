import _ from 'lodash';
import React, { FC, useState } from 'react';
import { RedLiner } from '../';

const BasicExample: FC = () => {
  const ButtonStyle = {
    backgroundColor: '#14c2e7',
    border: 'none',
    borderRadius: 20,
    color: 'white',
    fontFamily: 'Source Sans Pro',
    fontSize: '16px',
    height: 40,
    lineHeight: '40px',
    outline: 'none',
    width: 142,
  };

  const [ onHoverEnabled, setOnHoverEnabled ] = useState(false);

  return (
    <RedLiner showOnHover={onHoverEnabled}>
      <button onClick={() => setOnHoverEnabled(!onHoverEnabled)} style={ButtonStyle}>Measure Me</button>
    </RedLiner>
  );
}

export default BasicExample;