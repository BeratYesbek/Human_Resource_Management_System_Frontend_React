var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "moment"], function (require, exports, moment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    moment_1 = __importDefault(moment_1);
    function momentObj(props, propName, componentName) {
        if (props[propName]) {
            var value = props[propName];
            if (moment_1.default.isMoment(value)) {
                if (!value.isValid()) {
                    return new Error(propName + " in " + componentName + " is invalid 'moment' object");
                }
            }
            else {
                return new Error(propName + " in " + componentName + " is not 'moment' object");
            }
        }
        return null;
    }
    exports.momentObj = momentObj;
    function dateObject(props, propName, componentName) {
        if (props[propName]) {
            var value = props[propName];
            if (value && value.constructor && value.constructor.name) {
                if (value.constructor.name !== 'Date') {
                    return new Error(propName + " in " + componentName + " is not 'Date' object");
                }
            }
        }
        return null;
    }
    exports.dateObject = dateObject;
    exports.default = {
        momentObj: momentObj,
        dateObject: dateObject,
    };
});
