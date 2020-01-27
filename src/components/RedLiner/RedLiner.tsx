import _ from 'lodash';
import React, { useEffect, useRef, useState, RefObject } from 'react';
import { Manager, Reference, Popper } from 'react-popper';

import Line from '../Line/Line';
import InfoBox from '../InfoBox/InfoBox';

import styles from './RedLiner.module.scss';

type dimensionType = 'height' | 'padding' | 'specs' | 'width';

interface IRedLinerProps {
  /** The color to use */
  color?: string;
  /** Which attributes to display */
  config?: dimensionType[];
  /** Hide unless hovered */
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
 * A group of items
 */
const RedLiner: React.FC<IRedLinerProps> = ({ children, config, showOnHover }) => {
  const divElement = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const computedStyle = useComputedStyle(divElement) || {};

  const { height = 0, padding = 0, width = 0 } = computedStyle;

  const shouldShowDimension = (dimension: dimensionType): boolean => {
    return showOnHover ? isHovered && _.includes(config, dimension) : _.includes(config, dimension);
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
        direction="horizontal"
        isHidden={!shouldShowDimension('width')}
        placement="top"
        size={width}
      />
      <Line
        direction="vertical"
        isHidden={!shouldShowDimension('height')}
        placement="left"
        size={height}
      />
      <Line
        color="#543ac1"
        direction="horizontal"
        isHidden={!(shouldShowDimension('padding') && padding)}
        placement="bottom-start"
        size="50px"
      />
      {shouldShowDimension('specs') && <InfoBox computedStyle={computedStyle} />}
    </Manager>
  );
};

RedLiner.defaultProps = {
  color: 'red',
  config: ['height', 'width'],
};

export default RedLiner;
