import classNames from 'classnames';
import _ from 'lodash';
import * as React from 'react';
import { Popper } from 'react-popper';
import { Placement } from 'popper.js';

import styles from './Line.scss'; // tslint:disable-line no-relative-imports

interface IRedlineProps {
  color?: string;
  direction?: 'horizontal' | 'vertical';
  size: string | null;
  placement?: Placement;
  isHidden?: boolean;
}

/**
 * Redline indicator
 */
const Line: React.FC<IRedlineProps> = props => {
  const { color, direction, placement, size } = props;
  const dirProp: string = direction === 'horizontal' ? 'width' : 'height';
  const numberSize: number = size ? parseInt(size) : 0;

  const customStyle: any = { '--line-color': color, [dirProp]: `${numberSize - 2}px` }

  return props.isHidden ? null : (
    <Popper placement={placement}>
      {({ ref, style }) => (
        <div
          className={classNames(
            styles.line,
            styles[direction],
          )}
          ref={ref}
          style={{ ...customStyle, ...style }}
        >
          <span>{Math.round(parseInt(size))}px</span>
        </div>
      )}
    </Popper>
  );
}

Line.defaultProps = {
  direction: 'horizontal',
};

export default Line;
