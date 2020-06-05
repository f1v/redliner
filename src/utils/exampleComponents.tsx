import React from 'react';
import { Popper } from 'react-popper';
import { Info, Arrow, Title } from '../components/InfoBox/InfoBox.styles';

// This component is used to show a custom InfoBox. This code isn't shown publicly.
export const CustomInfoBox = (props: any) => (
  <Popper placement="right">
    {({ ref, style, placement, arrowProps }) => (
      <Info ref={ref} data-placement={placement} style={style}>
        <Arrow ref={arrowProps.ref} style={arrowProps.style} />
        <Title style={{ fontSize: '16px' }}>Custom Info</Title>
        <span>p: {props.computedStyle.padding}</span>
      </Info>
    )}
  </Popper>
);
