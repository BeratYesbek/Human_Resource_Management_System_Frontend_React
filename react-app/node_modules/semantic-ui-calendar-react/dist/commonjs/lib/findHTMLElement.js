"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ReactDOM = __importStar(require("react-dom"));
function findHTMLElement(e) {
    var el = ReactDOM.findDOMNode(e);
    if (el && el.focus) {
        return el;
    }
    return undefined;
}
exports.default = findHTMLElement;
