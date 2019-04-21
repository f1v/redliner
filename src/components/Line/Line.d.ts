import * as React from 'react';
interface IRedlineProps {
    direction: 'horizontal' | 'vertical';
    size?: string | null;
    position?: 'bottom' | 'top';
    text?: number | string;
    unit?: string;
}
/**
 * Redline indicator
 */
declare class RedLine extends React.Component<IRedlineProps> {
    static defaultProps: Partial<IRedlineProps>;
    render(): React.ReactNode;
}
export { RedLine };
