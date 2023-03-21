"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Subject = /** @class */ (function () {
    function Subject(_name) {
        this._name = _name;
        this.name = _name;
    }
    Object.defineProperty(Subject.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this.validateSubjectName(value);
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Subject.prototype.validateSubjectName = function (subject) {
        if (subject.length < 3)
            throw new Error('O nome tem que possuir no mínimo 3 caracteres');
    };
    return Subject;
}());
exports.default = Subject;
