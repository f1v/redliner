import _ from 'lodash';
import * as React from 'react';
import { Popper } from 'react-popper';
import { Placement } from 'popper.js';
import { LineElement } from './Line.styles';

export interface ILineProps {
  color?: string;
  direction?: 'horizontal' | 'vertical';
  size: string | null;
  placement?: Placement;
  isHidden?: boolean;
}

/**
 * The lines used inside RedLine
 */
const Line: React.FC<ILineProps> = props => {
  const { color, direction = 'horizontal', isHidden, placement, size } = props;
  const dirProp: string = direction === 'horizontal' ? 'width' : 'height';
  const numberSize: number = size ? parseInt(size) : 0;
  const customStyle: any = { '--line-color': color, [dirProp]: `${numberSize - 2}px` };

  return isHidden ? null : (
    <Popper placement={placement}>
      {({ ref, style }) => (
        <LineElement direction={direction} ref={ref} style={{ ...customStyle, ...style }}>
          <span>{size && Math.round(parseInt(size))}px</span>
        </LineElement>
      )}
    </Popper>
  );
};

Line.defaultProps = {
  direction: 'horizontal',
};

export default Line;
