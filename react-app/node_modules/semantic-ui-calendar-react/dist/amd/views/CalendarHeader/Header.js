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
define(["require", "exports", "lodash/isNil", "react", "semantic-ui-react", "./HeaderRange", "./HeaderWeeks"], function (require, exports, isNil_1, React, semantic_ui_react_1, HeaderRange_1, HeaderWeeks_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    isNil_1 = __importDefault(isNil_1);
    React = __importStar(React);
    HeaderRange_1 = __importDefault(HeaderRange_1);
    HeaderWeeks_1 = __importDefault(HeaderWeeks_1);
    function Header(props) {
        var rangeRowContent = props.rangeRowContent, displayWeeks = props.displayWeeks, onNextPageBtnClick = props.onNextPageBtnClick, onPrevPageBtnClick = props.onPrevPageBtnClick, hasPrevPage = props.hasPrevPage, hasNextPage = props.hasNextPage, onHeaderClick = props.onHeaderClick, width = props.width, title = props.title, localization = props.localization, className = props.className;
        var cellStyle = {
            border: 'none',
            borderBottom: displayWeeks ? 'none' : '1px solid rgba(34,36,38,.1)',
        };
        var prevPageBtnStyle = {
            cursor: hasPrevPage ? 'pointer' : 'auto',
        };
        var nextPageBtnStyle = {
            cursor: hasNextPage ? 'pointer' : 'auto',
        };
        var headerTitleStyle = {
            cursor: onHeaderClick ? 'pointer' : 'default',
        };
        return (React.createElement(semantic_ui_react_1.Table.Header, { className: className },
            !isNil_1.default(rangeRowContent) && React.createElement(HeaderRange_1.default, { content: rangeRowContent }),
            React.createElement(semantic_ui_react_1.Table.Row, null,
                React.createElement(semantic_ui_react_1.Table.HeaderCell, { style: cellStyle, colSpan: '1' },
                    React.createElement(semantic_ui_react_1.Icon, { fitted: true, style: prevPageBtnStyle, disabled: !hasPrevPage, onClick: hasPrevPage ? onPrevPageBtnClick : undefined, name: 'chevron left' })),
                React.createElement(semantic_ui_react_1.Table.HeaderCell, { onClick: onHeaderClick ? onHeaderClick : undefined, style: cellStyle, colSpan: (width - 2).toString() },
                    React.createElement("span", { style: headerTitleStyle }, title)),
                React.createElement(semantic_ui_react_1.Table.HeaderCell, { style: cellStyle, colSpan: '1' },
                    React.createElement(semantic_ui_react_1.Icon, { fitted: true, style: nextPageBtnStyle, disabled: !hasNextPage, onClick: hasNextPage ? onNextPageBtnClick : undefined, name: 'chevron right' }))),
            displayWeeks && React.createElement(HeaderWeeks_1.default, { localization: localization })));
    }
    exports.default = Header;
});
