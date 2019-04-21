"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var classnames_1 = __importDefault(require("classnames"));
var React = __importStar(require("react"));
var RedLiner_scss_1 = __importDefault(require("../RedLiner/RedLiner.scss")); // tslint:disable-line no-relative-imports
/**
 * Redline indicator
 */
var RedLine = /** @class */ (function (_super) {
    __extends(RedLine, _super);
    function RedLine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RedLine.prototype.render = function () {
        var _a, _b;
        var _c = this.props, direction = _c.direction, position = _c.position, size = _c.size, text = _c.text;
        var dirProp = direction === 'horizontal' ? 'width' : 'height';
        var numberSize = size ? parseInt(size) : 0;
        return (React.createElement("div", { className: classnames_1.default(RedLiner_scss_1.default.RedLinertation, RedLiner_scss_1.default[direction], position ? RedLiner_scss_1.default[position] : '', (_a = {}, _a[RedLiner_scss_1.default.shift] = numberSize < 30, _a)), style: (_b = {}, _b[dirProp] = numberSize - 2 + "px", _b) },
            React.createElement("span", null, "" + (text || size))));
    };
    RedLine.defaultProps = {
        direction: 'horizontal',
        size: '1px',
    };
    return RedLine;
}(React.Component));
exports.RedLine = RedLine;
//# sourceMappingURL=RedLine.js.map