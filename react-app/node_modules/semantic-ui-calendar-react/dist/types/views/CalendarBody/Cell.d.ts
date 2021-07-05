import * as React from 'react';
import { OnValueClickData } from '../BaseCalendarView';
export interface CellWidthStyle {
    width: string;
}
export declare const cellStyleWidth3: CellWidthStyle;
export declare const cellStyleWidth4: CellWidthStyle;
export declare const cellStyleWidth7: CellWidthStyle;
interface CellProps {
    /** Position of a cell on the page. (Used by parent component) */
    itemPosition: number;
    /** Cell's content. */
    content: string;
    /** Styles for cell width. */
    style: CellWidthStyle;
    /** Called after click on a cell. */
    onClick: (e: React.SyntheticEvent<HTMLElement>, data: OnValueClickData) => void;
    /** Called on cell hover. */
    onHover: (e: React.SyntheticEvent<HTMLElement>, data: OnValueClickData) => void;
    /** Is cell is hovered. */
    hovered?: boolean;
    /** Is cell active. */
    active?: boolean;
    /** Is cell disabled. */
    disabled?: boolean;
    /** Is cell marked. */
    marked?: boolean;
    /** Color of the mark. */
    markColor?: any;
}
declare class Cell extends React.Component<CellProps, any> {
    render(): JSX.Element;
    private onCellClick;
    private onCellHover;
}
export default Cell;
