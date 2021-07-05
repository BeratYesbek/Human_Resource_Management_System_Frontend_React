import * as React from 'react';
import { OnValueClickData } from '../BaseCalendarView';
export declare type BodyWidth = 3 | 4 | 7;
interface BodyProps {
    /** A number of columns in a row. */
    width: BodyWidth;
    /** Data that is used to fill a calendar. */
    data: string[];
    /** Called after a click on calendar's cell. */
    onCellClick: (e: React.SyntheticEvent<HTMLElement>, data: OnValueClickData) => void;
    /** Called on cell hover. */
    onCellHover: (e: React.SyntheticEvent<HTMLElement>, data: any) => void;
    /** Index of an element in `data` array that should be displayed as hovered. */
    hovered?: number;
    /** Index of an element (or array of indexes) in `data` array that should be displayed as active. */
    active?: number | number[];
    /** Array of element indexes in `data` array that should be displayed as disabled. */
    disabled?: number[];
    /** Array of element indexes in `data` array that should be displayed as marked. */
    marked?: number[];
    /** The color of the mark that will be displayed on the calendar. */
    markColor?: string;
}
declare function Body(props: BodyProps): JSX.Element;
export default Body;
