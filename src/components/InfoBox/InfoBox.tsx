import * as React from 'react';
import { Popper } from 'react-popper';

import styles from '../RedLiner/RedLiner.scss'; // tslint:disable-line no-relative-imports

const InfoBox: React.FC<{ computedStyle: CSSStyleDeclaration }> = ({ computedStyle }) => {
  const { backgroundColor, borderRadius, fontFamily, fontSize } = computedStyle;

  return (
    <Popper placement="right">
      {({ ref, style, placement, arrowProps }) => (
        <div className={styles.info}
          ref={ref}
          data-placement={placement}
          style={style}>
            <div className={styles.arrow} ref={arrowProps.ref} style={arrowProps.style} />
            <h6>Details</h6>
            background-color: {backgroundColor};
            <br />
            border-radius: {borderRadius};
            <br />
            font-family: {fontFamily};
            <br />
            font-size: {fontSize};
          </div>
      )}
    </Popper>
  );
}

export default InfoBox;
