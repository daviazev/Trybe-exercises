"use strict";
exports.__esModule = true;
var MyClass = /** @class */ (function () {
    function MyClass(myNumber) {
        this.myNumber = myNumber;
    }
    MyClass.prototype.myFunc = function (myParam) {
        return "".concat(this.myNumber, " + ").concat(myParam, " = ").concat(this.myNumber + myParam);
    };
    return MyClass;
}());
exports["default"] = MyClass;
