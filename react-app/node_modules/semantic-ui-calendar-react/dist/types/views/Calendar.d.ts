import * as React from 'react';
interface CalendarProps {
    /** Table content. */
    children: React.ReactNode[];
    /** Whether to outline the calendar on focus. */
    outlineOnFocus: boolean;
    /** Picker width (any value that `style.width` can take). */
    pickerWidth?: string;
    /** Style object for picker. */
    pickerStyle?: object;
}
declare class Calendar extends React.Component<CalendarProps, any> {
    static readonly propTypes: object;
    static readonly defaultProps: {
        pickerWidth: string;
    };
    render(): JSX.Element;
}
export default Calendar;
