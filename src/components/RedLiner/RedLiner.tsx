import _ from 'lodash';
import React, { useEffect, useRef, useState, RefObject } from 'react';
import { Manager, Reference } from 'react-popper';

import { CSSProperty } from '../../utils/types';
import Line from '../Line/Line';
import InfoBox from '../InfoBox/InfoBox';

import styles from './RedLiner.module.scss';

interface IRedLinerProps {
  /**
   * The color of the measurement lines
   * @default 'red'
   */
  color?: string;
  /**
   * Attributes the `RedLiner` component should display
   * @default 'all'
   */
  config?: Array<'height' | 'info' | 'width'> | 'all';
  /**
   * Attributes to display in the Infobox
   */
  infoOpts?: string[];
  /**
   * Show `RedLiner` only when the element is hovered
   * @default false
   */
  showOnHover?: boolean;
}

function useComputedStyle(divElement: RefObject<HTMLDivElement>) {
  const [computedStyle, setComputedStyle] = useState();

  useEffect(() => {
    if (divElement && divElement.current && divElement.current.children.length) {
      const child: Element = divElement.current.children[0];

      setComputedStyle(window.getComputedStyle(child));
    }
  }, [divElement]);

  return computedStyle;
}

/**
 * The main component
 */
const RedLiner: React.FC<IRedLinerProps> = ({ children, color, config, infoOpts, showOnHover }) => {
  const [isHovered, setIsHovered] = useState(false);
  const divElement = useRef(null);
  const computedStyle = useComputedStyle(divElement) || {};
  const { height = 0, width = 0 } = computedStyle;

  const shouldShowDimension = (dimension: 'height' | 'info' | 'width'): boolean => {
    const isEnabled = _.includes(config, dimension) || config === 'all';

    return showOnHover ? isHovered && isEnabled : isEnabled;
  };

  return (
    <Manager>
      <Reference>
        {({ ref }) => (
          <div
            className={styles.wrapper}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            ref={ref}
          >
            <div ref={divElement}>{children}</div>
          </div>
        )}
      </Reference>
      <Line
        color={color}
        direction="horizontal"
        isHidden={!shouldShowDimension('width')}
        placement="top"
        size={width}
      />
      <Line
        color={color}
        direction="vertical"
        isHidden={!shouldShowDimension('height')}
        placement="left"
        size={height}
      />
      {shouldShowDimension('info') && (
        <InfoBox computedStyle={computedStyle} customOpts={infoOpts} />
      )}
    </Manager>
  );
};

RedLiner.defaultProps = {
  color: 'red',
  config: 'all',
};

export default RedLiner;
