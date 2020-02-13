import * as React from 'react';
import _ from 'lodash';
import { Popper } from 'react-popper';
import { replaceAllRgbWithHex } from '../../utils/colorConversion';
import { CSSProperty, CSSPropertyIndex } from '../../utils/types';

import styles from '../RedLiner/RedLiner.module.scss';

/**
 * Box which displays additional specs
 */
const InfoBox: React.FC<{
  computedStyle: CSSStyleDeclaration;
  customOpts?: CSSProperty[];
}> = ({ computedStyle, customOpts }) => {
  const { backgroundColor, padding, fontFamily, fontSize } = computedStyle;

  const defaultOpts = (
    <span>
      background-color: {backgroundColor};
      <br />
      font-family: {fontFamily};
      <br />
      font-size: {fontSize};
      <br />
      padding: {padding};
    </span>
  );

  const mappedCustomOpts =
    customOpts &&
    customOpts.map((opt: CSSProperty) => (
      <span key={'opt'}>
        {opt}: {computedStyle[_.camelCase(opt as any) as keyof CSSPropertyIndex]};
        <br />
      </span>
    ));

  const options = customOpts
    ? mappedCustomOpts && replaceAllRgbWithHex(mappedCustomOpts)
    : replaceAllRgbWithHex(defaultOpts);

  return (
    <Popper placement="right">
      {({ ref, style, placement, arrowProps }) => (
        <div className={styles.info} ref={ref} data-placement={placement} style={style}>
          <div className={styles.arrow} ref={arrowProps.ref} style={arrowProps.style} />
          <h6>Details</h6>
          {options}
        </div>
      )}
    </Popper>
  );
};

export default InfoBox;
