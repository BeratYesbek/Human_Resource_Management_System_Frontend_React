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
define(["require", "exports", "lodash/invoke", "react", "semantic-ui-react"], function (require, exports, invoke_1, React, semantic_ui_react_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    invoke_1 = __importDefault(invoke_1);
    React = __importStar(React);
    var hoverCellStyles = {
        outline: '1px solid #85b7d9',
        cursor: 'pointer',
    };
    exports.cellStyleWidth3 = {
        width: '33.333333%',
    };
    exports.cellStyleWidth4 = {
        width: '25%',
    };
    exports.cellStyleWidth7 = {
        width: '14.285714%',
    };
    var Cell = /** @class */ (function (_super) {
        __extends(Cell, _super);
        function Cell() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.onCellClick = function (event) {
                var _a = _this.props, itemPosition = _a.itemPosition, content = _a.content;
                invoke_1.default(_this.props, 'onClick', event, __assign({}, _this.props, { itemPosition: itemPosition, value: content }));
            };
            _this.onCellHover = function (event) {
                var itemPosition = _this.props.itemPosition;
                invoke_1.default(_this.props, 'onHover', event, __assign({}, _this.props, { itemPosition: itemPosition }));
            };
            return _this;
        }
        Cell.prototype.render = function () {
            var _a = this.props, itemPosition = _a.itemPosition, content = _a.content, style = _a.style, onClick = _a.onClick, onHover = _a.onHover, hovered = _a.hovered, marked = _a.marked, markColor = _a.markColor, rest = __rest(_a, ["itemPosition", "content", "style", "onClick", "onHover", "hovered", "marked", "markColor"]);
            var cellStyle = __assign({}, style, (hovered ? hoverCellStyles : {}));
            return (React.createElement(semantic_ui_react_1.Table.Cell, __assign({}, rest, { style: cellStyle, onMouseOver: this.onCellHover, onClick: this.onCellClick }), (marked && !rest.disabled) ? React.createElement(semantic_ui_react_1.Label, { circular: true, color: markColor, key: content }, content)
                : React.createElement("span", { className: 'suicr-content-item' }, content)));
        };
        return Cell;
    }(React.Component));
    exports.default = Cell;
});
