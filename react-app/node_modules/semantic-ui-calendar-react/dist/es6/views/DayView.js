var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import * as React from 'react';
import BaseCalendarView from './BaseCalendarView';
import Calendar from './Calendar';
import Body from './CalendarBody/Body';
import Header from './CalendarHeader/Header';
import { findHTMLElement } from '../lib';
export var DAY_CALENDAR_ROW_WIDTH = 7;
export var WEEKS_TO_DISPLAY = 6;
var DayView = /** @class */ (function (_super) {
    __extends(DayView, _super);
    function DayView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DayView.prototype.render = function () {
        var _this = this;
        var _a = this.props, values = _a.values, onNextPageBtnClick = _a.onNextPageBtnClick, onPrevPageBtnClick = _a.onPrevPageBtnClick, onValueClick = _a.onValueClick, hasNextPage = _a.hasNextPage, hasPrevPage = _a.hasPrevPage, currentHeadingValue = _a.currentHeadingValue, onHeaderClick = _a.onHeaderClick, disabledItemIndexes = _a.disabledItemIndexes, activeItemIndex = _a.activeItemIndex, hoveredItemIndex = _a.hoveredItemIndex, onCellHover = _a.onCellHover, onMount = _a.onMount, inline = _a.inline, markedItemIndexes = _a.markedItemIndexes, markColor = _a.markColor, localization = _a.localization, rest = __rest(_a, ["values", "onNextPageBtnClick", "onPrevPageBtnClick", "onValueClick", "hasNextPage", "hasPrevPage", "currentHeadingValue", "onHeaderClick", "disabledItemIndexes", "activeItemIndex", "hoveredItemIndex", "onCellHover", "onMount", "inline", "markedItemIndexes", "markColor", "localization"]);
        return (React.createElement(Calendar, __assign({ ref: function (e) { return _this.calendarNode = findHTMLElement(e); }, outlineOnFocus: inline }, rest),
            React.createElement(Header, { className: 'suicr-day-view-header', width: DAY_CALENDAR_ROW_WIDTH, displayWeeks: true, onNextPageBtnClick: onNextPageBtnClick, onPrevPageBtnClick: onPrevPageBtnClick, hasNextPage: hasNextPage, hasPrevPage: hasPrevPage, title: currentHeadingValue, onHeaderClick: onHeaderClick, localization: localization }),
            React.createElement(Body, { width: DAY_CALENDAR_ROW_WIDTH, data: values, hovered: hoveredItemIndex, onCellHover: onCellHover, onCellClick: onValueClick, active: activeItemIndex, disabled: disabledItemIndexes, marked: markedItemIndexes, markColor: markColor })));
    };
    return DayView;
}(BaseCalendarView));
export default DayView;
