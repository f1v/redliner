import _ from 'lodash';
import React, { FC, useState } from 'react';
import { RedLiner } from '../';
import { buttonStyle } from '../../../utils/exampleStyles';

const BasicExample: FC = () => {
  const [onHoverEnabled, setOnHoverEnabled] = useState(false);

  return (
    <RedLiner showOnHover={onHoverEnabled}>
      <button onClick={() => setOnHoverEnabled(!onHoverEnabled)} style={buttonStyle}>
        Measure Me
      </button>
    </RedLiner>
  );
};

export default BasicExample;
