import React from 'react';
import { Popper } from 'react-popper';
import styles from '../components/RedLiner/RedLiner.module.scss';

export const CustomInfoBox = (props: any) => (
  <Popper placement="right">
    {({ ref, style, placement, arrowProps }) => (
      <div className={styles.info} ref={ref} data-placement={placement} style={style}>
        <div className={styles.arrow} ref={arrowProps.ref} style={arrowProps.style} />
        <h6 style={{ fontSize: '16px' }}>Custom Info</h6>
        <span>p: {props.computedStyle.padding}</span>
      </div>
    )}
  </Popper>
);
