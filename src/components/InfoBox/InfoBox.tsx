import * as React from 'react';
import _ from 'lodash';
import { Popper } from 'react-popper';
import { replaceAllRgbWithHex } from '../../utils/colorConversion';
import './InfoBox.css';

export interface IInfoBoxProps {
  computedStyle: CSSStyleDeclaration;
  customOpts?: string[];
}

/**
 * Box which displays additional specs
 */
const InfoBox: React.FC<IInfoBoxProps> = ({ computedStyle, customOpts }) => {
  const { backgroundColor, fontFamily, fontSize, padding } = computedStyle;

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

  const mappedCustomOpts = customOpts?.map((opt: string) => (
    <span key="opt">
      {opt}: {computedStyle[_.camelCase(opt) as any]};
      <br />
    </span>
  ));

  return (
    <Popper placement="right">
      {({ ref, style, placement, arrowProps }) => (
        <div className="info" ref={ref} data-placement={placement} style={style}>
          <div className="arrow" ref={arrowProps.ref} style={arrowProps.style} />
          <h6>Details</h6>
          {customOpts
            ? mappedCustomOpts && replaceAllRgbWithHex(mappedCustomOpts)
            : replaceAllRgbWithHex(defaultOpts)}
        </div>
      )}
    </Popper>
  );
};

export default InfoBox;
