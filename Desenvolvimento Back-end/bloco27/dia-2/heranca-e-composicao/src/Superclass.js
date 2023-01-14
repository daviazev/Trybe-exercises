"use strict";
// PARA FIXAR
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Subclass = exports.Superclass = void 0;
var Superclass = /** @class */ (function () {
    function Superclass(isSuper) {
        if (isSuper === void 0) { isSuper = true; }
        this.isSuper = isSuper;
    }
    Superclass.prototype.sayHello = function () {
        console.log('Olá mundo!');
    };
    return Superclass;
}());
exports.Superclass = Superclass;
var Subclass = /** @class */ (function (_super) {
    __extends(Subclass, _super);
    function Subclass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Subclass;
}(Superclass));
exports.Subclass = Subclass;
