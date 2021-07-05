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
var HOUR_CALENDAR_ROW_WIDTH = 4;
var HourView = /** @class */ (function (_super) {
    __extends(HourView, _super);
    function HourView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HourView.prototype.render = function () {
        var _this = this;
        var _a = this.props, values = _a.values, hasHeader = _a.hasHeader, onValueClick = _a.onValueClick, onNextPageBtnClick = _a.onNextPageBtnClick, onPrevPageBtnClick = _a.onPrevPageBtnClick, hasPrevPage = _a.hasPrevPage, hasNextPage = _a.hasNextPage, onHeaderClick = _a.onHeaderClick, disabledItemIndexes = _a.disabledItemIndexes, activeItemIndex = _a.activeItemIndex, currentHeadingValue = _a.currentHeadingValue, hoveredItemIndex = _a.hoveredItemIndex, onCellHover = _a.onCellHover, onMount = _a.onMount, inline = _a.inline, localization = _a.localization, rest = __rest(_a, ["values", "hasHeader", "onValueClick", "onNextPageBtnClick", "onPrevPageBtnClick", "hasPrevPage", "hasNextPage", "onHeaderClick", "disabledItemIndexes", "activeItemIndex", "currentHeadingValue", "hoveredItemIndex", "onCellHover", "onMount", "inline", "localization"]);
        var headerProps = {
            className: 'suicr-hour-view-header',
            onNextPageBtnClick: onNextPageBtnClick,
            onPrevPageBtnClick: onPrevPageBtnClick,
            hasPrevPage: hasPrevPage,
            hasNextPage: hasNextPage,
            onHeaderClick: onHeaderClick,
            title: currentHeadingValue,
            width: HOUR_CALENDAR_ROW_WIDTH,
            displayWeeks: false,
            localization: localization,
        };
        return (React.createElement(Calendar, __assign({ ref: function (e) { return _this.calendarNode = findHTMLElement(e); }, outlineOnFocus: inline }, rest),
            hasHeader && React.createElement(Header, __assign({}, headerProps)),
            React.createElement(Body, { data: values, width: HOUR_CALENDAR_ROW_WIDTH, onCellClick: onValueClick, hovered: hoveredItemIndex, onCellHover: onCellHover, active: activeItemIndex, disabled: disabledItemIndexes })));
    };
    return HourView;
}(BaseCalendarView));
export default HourView;
