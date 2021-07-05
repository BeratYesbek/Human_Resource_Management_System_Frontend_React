/// <reference types="react" />
import BaseCalendarView, { BaseCalendarViewProps, CalendarWithHeaderViewProps, HeadingValueProps, RangeSelectionCalendarViewProps } from './BaseCalendarView';
declare type DatesRangeViewProps = BaseCalendarViewProps & HeadingValueProps & RangeSelectionCalendarViewProps & CalendarWithHeaderViewProps;
declare class DatesRangeView extends BaseCalendarView<DatesRangeViewProps, any> {
    static defaultProps: {
        active: {
            start: any;
            end: any;
        };
    };
    render(): JSX.Element;
}
export default DatesRangeView;
