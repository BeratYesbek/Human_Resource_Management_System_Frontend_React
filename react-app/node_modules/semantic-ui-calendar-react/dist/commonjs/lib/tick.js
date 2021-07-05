"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Set zero timeout.
 *
 * Sometimes we need to delay rerendering components
 * on one tick (if they are inside  `Popup` and rerendering could
 * change `Popup`'s content sizes).
 * Because it races with Popup's onclick handler.
 * `Popup` relies on it's content sizes when computing
 * should popup stay open or be closed. So we need
 * to wait until `Popup`'s onclick handler done its job.
 */
var tick = function (leadToRerendering) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    setTimeout.apply(void 0, [leadToRerendering, 0].concat(args));
};
exports.default = tick;
