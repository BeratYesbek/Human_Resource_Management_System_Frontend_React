define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /** Return true if run on mobile browser. */
    var checkMobile = function () {
        if (typeof window === "undefined") {
            return false;
        }
        var navigator = window.navigator;
        if (!navigator) {
            return false;
        }
        if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)) {
            return true;
        }
        return false;
    };
    exports.default = checkMobile;
});
