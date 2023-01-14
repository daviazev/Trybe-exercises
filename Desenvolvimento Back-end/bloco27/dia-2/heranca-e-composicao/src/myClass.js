"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyClass = /** @class */ (function () {
    function MyClass(myNumber) {
        this.myNumber = myNumber;
    }
    MyClass.prototype.myFunc = function (myParam) {
        return this.myNumber + " + " + myParam + " = " + (this.myNumber + myParam);
    };
    return MyClass;
}());
exports.default = MyClass;
