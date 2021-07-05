"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var range_1 = __importDefault(require("lodash/range"));
var isNil_1 = __importDefault(require("lodash/isNil"));
var React = __importStar(require("react"));
var BaseCalendarView_1 = __importDefault(require("./BaseCalendarView"));
var Calendar_1 = __importDefault(require("./Calendar"));
var Body_1 = __importDefault(require("./CalendarBody/Body"));
var Header_1 = __importDefault(require("./CalendarHeader/Header"));
var DayView_1 = require("./DayView");
var lib_1 = require("../lib");
var DAY_POSITIONS = range_1.default(DayView_1.WEEKS_TO_DISPLAY * 7);
function getActive(start, end) {
    if (isNil_1.default(start) && isNil_1.default(end)) {
        return;
    }
    if (!isNil_1.default(start) && isNil_1.default(end)) {
        return start;
    }
    if (!isNil_1.default(start) && !isNil_1.default(end)) {
        return DAY_POSITIONS.slice(start, end + 1);
    }
}
var DatesRangeView = /** @class */ (function (_super) {
    __extends(DatesRangeView, _super);
    function DatesRangeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DatesRangeView.prototype.render = function () {
        var _this = this;
        var _a = this.props, values = _a.values, onNextPageBtnClick = _a.onNextPageBtnClick, onPrevPageBtnClick = _a.onPrevPageBtnClick, onValueClick = _a.onValueClick, hasPrevPage = _a.hasPrevPage, hasNextPage = _a.hasNextPage, currentHeadingValue = _a.currentHeadingValue, onHeaderClick = _a.onHeaderClick, activeRange = _a.activeRange, disabledItemIndexes = _a.disabledItemIndexes, currentRangeHeadingValue = _a.currentRangeHeadingValue, hoveredItemIndex = _a.hoveredItemIndex, onCellHover = _a.onCellHover, onMount = _a.onMount, inline = _a.inline, markColor = _a.markColor, markedItemIndexes = _a.markedItemIndexes, localization = _a.localization, rest = __rest(_a, ["values", "onNextPageBtnClick", "onPrevPageBtnClick", "onValueClick", "hasPrevPage", "hasNextPage", "currentHeadingValue", "onHeaderClick", "activeRange", "disabledItemIndexes", "currentRangeHeadingValue", "hoveredItemIndex", "onCellHover", "onMount", "inline", "markColor", "markedItemIndexes", "localization"]);
        var start = activeRange.start, end = activeRange.end;
        return (React.createElement(Calendar_1.default, __assign({ ref: function (e) { return _this.calendarNode = lib_1.findHTMLElement(e); }, outlineOnFocus: inline }, rest),
            React.createElement(Header_1.default, { width: DayView_1.DAY_CALENDAR_ROW_WIDTH, className: 'suicr-dates-range-view-header', displayWeeks: true, rangeRowContent: currentRangeHeadingValue, onNextPageBtnClick: onNextPageBtnClick, onPrevPageBtnClick: onPrevPageBtnClick, hasNextPage: hasNextPage, hasPrevPage: hasPrevPage, title: currentHeadingValue, onHeaderClick: onHeaderClick, localization: localization }),
            React.createElement(Body_1.default, { width: DayView_1.DAY_CALENDAR_ROW_WIDTH, data: values, onCellClick: onValueClick, onCellHover: onCellHover, hovered: hoveredItemIndex, markColor: markColor, marked: markedItemIndexes, active: getActive(start, end), disabled: disabledItemIndexes })));
    };
    DatesRangeView.defaultProps = {
        active: {
            start: undefined,
            end: undefined,
        },
    };
    return DatesRangeView;
}(BaseCalendarView_1.default));
exports.default = DatesRangeView;
