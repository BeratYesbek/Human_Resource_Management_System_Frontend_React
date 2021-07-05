/// <reference types="react" />
import { BodyWidth } from '../CalendarBody/Body';
export interface HeaderProps {
    /** Header text content. */
    title: string;
    /** Called after click on next page button. */
    onNextPageBtnClick: () => void;
    /** Called after click on previous page button. */
    onPrevPageBtnClick: () => void;
    /** Whether to display previous page button as active or disabled. */
    hasPrevPage: boolean;
    /** Whether to display next page button as active or disabled. */
    hasNextPage: boolean;
    /** Whether to display weeks row or not. */
    displayWeeks: boolean;
    /** Header width. */
    width: BodyWidth;
    /** Text content to display in dates-range row. */
    rangeRowContent?: string;
    /** Called after click on calendar header. */
    onHeaderClick?: () => void;
    /** Moment date localization */
    localization?: string;
    className?: string;
}
declare function Header(props: HeaderProps): JSX.Element;
export default Header;
