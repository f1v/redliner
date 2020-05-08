import { css } from '@emotion/core';

export const base = css`
  height: 100%;
  position: absolute;
  text-align: center;
  width: 100%;

  &:before {
    content: '';
    height: 1px;
    position: absolute;
    width: 1px;
  }

  span {
    color: white;
    background-color: #f65e23;
    border-radius: 3px;
    display: inline-block;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    padding: 0 4px;
    position: absolute;
  }
`;

export const horizontal = css`
  border-left: 1px solid #f65e23;
  border-right: 1px solid #f65e23;
  height: 11px;

  &:before {
    width: 100%;
    background-color: #f65e23;
    left: 0;
    top: 5px;
  }

  span {
    top: -5px;
    margin-left: -15px;
    left: 50%;
  }
`;

export const vertical = css`
  border-bottom: 1px solid #f65e23;
  border-top: 1px solid #f65e23;
  left: -32px;
  top: 0;
  width: 11px;

  &:before {
    height: 100%;
    background-color: #f65e23;
    left: 5px;
  }

  span {
    left: -10px;
    margin-top: -10px;
    top: 50%;
  }
`;
