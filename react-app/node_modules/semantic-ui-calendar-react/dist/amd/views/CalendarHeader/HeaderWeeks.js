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
define(["require", "exports", "moment", "react", "semantic-ui-react"], function (require, exports, moment_1, React, semantic_ui_react_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    moment_1 = __importDefault(moment_1);
    React = __importStar(React);
    /** Return array of week day names.
     *
     * getWeekDays() --> ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Su']
     */
    var getWeekDays = function (m, localization) {
        var weekDays = [];
        var day = localization ? m().locale(localization).startOf('week') : m().startOf('week');
        for (var i = 0; i < 7; i++) {
            weekDays[i] = day.format('dd');
            day.add(1, 'd');
        }
        return weekDays;
    };
    var cellStyle = {
        border: 'none',
        borderBottom: '1px solid rgba(34,36,38,.1)',
    };
    var getWeekDayCells = function (m, localization) { return getWeekDays(m, localization).map(function (weekDay) { return (React.createElement(semantic_ui_react_1.Table.HeaderCell, { key: weekDay, style: cellStyle, colSpan: '1' }, weekDay)); }); };
    function HeaderWeeks(props) {
        var localization = props.localization;
        return (React.createElement(semantic_ui_react_1.Table.Row, null, getWeekDayCells(moment_1.default, localization)));
    }
    exports.default = HeaderWeeks;
});
