import _ from 'lodash';
import React, { useEffect, useRef, useState, RefObject } from 'react';
import { Manager, Reference } from 'react-popper';
import Line from '../Line/Line';
import { Config, dimensionType, getConfig } from './helpers/config';
import { getCurrentComponents, ComponentsConfig } from './helpers/components';
import styles from './RedLiner.module.scss';

interface IRedLinerProps {
  /**
   * Optionally provide your own components for use
   */
  components: ComponentsConfig;
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
const RedLiner: React.FC<IRedLinerProps> = ({ children, components, config, showOnHover }) => {
  const [isHovered, setIsHovered] = useState(false);
  const divElement = useRef(null);

  const computedStyle = useComputedStyle(divElement) || {};
  const { height = 0, width = 0 } = computedStyle;

  const { color, displayOpts, infoOpts } = getConfig(config);
  const { InfoBox } = getCurrentComponents(components);

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
