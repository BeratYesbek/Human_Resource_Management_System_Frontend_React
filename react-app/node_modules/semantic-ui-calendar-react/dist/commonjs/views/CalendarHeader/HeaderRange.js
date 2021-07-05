"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var semantic_ui_react_1 = require("semantic-ui-react");
var cellStyle = {
    border: 'none',
};
function HeaderRange(props) {
    var content = props.content;
    return (React.createElement(semantic_ui_react_1.Table.Row, null,
        React.createElement(semantic_ui_react_1.Table.HeaderCell, { style: cellStyle, colSpan: '7' }, content)));
}
exports.default = HeaderRange;
