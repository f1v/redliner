import _ from 'lodash';
import React, { useEffect, useRef, useState, RefObject } from 'react';
import { Manager, Reference } from 'react-popper';

import Line from '../Line/Line';
import InfoBox from '../InfoBox/InfoBox';

import styles from './RedLiner.module.scss';

type dimensionType = 'height' | 'info' | 'width';

interface Config {
  color?: string;
  displayOpts?: dimensionType[] | 'all';
  infoOpts?: string[];
}

interface IRedLinerProps {
  /**
   * The main configuration prop
   * @default { color: 'red', displayOpts: 'all' },
   */
  config?: Config;
  /**
   * Show only when element is hovered
   * @default false
   */
  showOnHover?: boolean;
}

const DEFAULT_CONFIG = {
  color: 'red',
  displayOpts: 'all',
};

function getConfig(config: Config | undefined) {
  return Object.assign({}, DEFAULT_CONFIG, config || {});
}

function useComputedStyle(divElement: RefObject<HTMLDivElement>) {
  const [computedStyle, setComputedStyle] = useState();

  useEffect(() => {
    if (divElement.current?.children.length) {
      const child: Element = divElement.current.children[0];

      setComputedStyle(window.getComputedStyle(child));
    }
  }, [divElement]);

  return computedStyle;
}

/**
 * The main component
 */
const RedLiner: React.FC<IRedLinerProps> = ({ children, config, showOnHover }) => {
  const [isHovered, setIsHovered] = useState(false);
  const divElement = useRef(null);
  const computedStyle = useComputedStyle(divElement) || {};
  const { height = 0, width = 0 } = computedStyle;
  const { color, displayOpts, infoOpts } = getConfig(config);

  const shouldShowDimension = (dimension: dimensionType): boolean => {
    const isEnabled = _.includes(displayOpts, dimension) || displayOpts === 'all';

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
  config: {
    color: 'red',
    displayOpts: 'all',
  },
  showOnHover: false,
};

export default RedLiner;
