import isNil from 'lodash/isNil';
import * as React from 'react';
import { Icon, Table, } from 'semantic-ui-react';
import HeaderRange from './HeaderRange';
import HeaderWeeks from './HeaderWeeks';
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
    return (React.createElement(Table.Header, { className: className },
        !isNil(rangeRowContent) && React.createElement(HeaderRange, { content: rangeRowContent }),
        React.createElement(Table.Row, null,
            React.createElement(Table.HeaderCell, { style: cellStyle, colSpan: '1' },
                React.createElement(Icon, { fitted: true, style: prevPageBtnStyle, disabled: !hasPrevPage, onClick: hasPrevPage ? onPrevPageBtnClick : undefined, name: 'chevron left' })),
            React.createElement(Table.HeaderCell, { onClick: onHeaderClick ? onHeaderClick : undefined, style: cellStyle, colSpan: (width - 2).toString() },
                React.createElement("span", { style: headerTitleStyle }, title)),
            React.createElement(Table.HeaderCell, { style: cellStyle, colSpan: '1' },
                React.createElement(Icon, { fitted: true, style: nextPageBtnStyle, disabled: !hasNextPage, onClick: hasNextPage ? onNextPageBtnClick : undefined, name: 'chevron right' }))),
        displayWeeks && React.createElement(HeaderWeeks, { localization: localization })));
}
export default Header;
