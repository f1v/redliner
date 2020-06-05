import * as React from 'react';
import _ from 'lodash';
import { Popper } from 'react-popper';
import { Info, Arrow, Title } from './InfoBox.styles';
import { replaceAllRgbWithHex } from '../../utils/colorConversion';

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
        <Info ref={ref} data-placement={placement} style={style}>
          <Arrow ref={arrowProps.ref} style={arrowProps.style} />
          <Title>Details</Title>
          {customOpts
            ? mappedCustomOpts && replaceAllRgbWithHex(mappedCustomOpts)
            : replaceAllRgbWithHex(defaultOpts)}
        </Info>
      )}
    </Popper>
  );
};

export default InfoBox;
