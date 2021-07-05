import * as ReactDOM from 'react-dom';
export default function findHTMLElement(e) {
    var el = ReactDOM.findDOMNode(e);
    if (el && el.focus) {
        return el;
    }
    return undefined;
}
