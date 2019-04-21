import React from 'react';
declare type dimensionType = 'height' | 'padding' | 'width';
interface IRedLinerProps {
    /** The color to use */
    color?: string;
    config?: dimensionType[];
}
interface IRedLinerState {
    computedStyle: Partial<CSSStyleDeclaration>;
}
/**
 * A group of items
 */
declare class RedLiner extends React.Component<IRedLinerProps, IRedLinerState> {
    static defaultProps: Partial<IRedLinerProps>;
    divElement: React.RefObject<HTMLDivElement>;
    state: IRedLinerState;
    componentDidMount(): void;
    shouldShowDimension(dimension: dimensionType): boolean;
    renderInfoBox(): React.ReactNode;
    render(): React.ReactNode;
}
export { RedLiner };
