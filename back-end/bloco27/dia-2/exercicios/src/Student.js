"use strict";
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, birthDate) {
        var _this = _super.call(this, name, birthDate) || this;
        _this._examsGrades = [];
        _this._assignmentsGrades = [];
        _this._enrollment = _this.generateEnrollment();
        return _this;
    }
    Student.prototype.generateEnrollment = function () {
        return "Student: " + this.name + " - " + new Date().getTime();
    };
    Student.prototype.sumGrades = function () {
        var grades = __spreadArray(__spreadArray([], this._examsGrades, true), this._assignmentsGrades, true);
        return grades.reduce(function (acc, curr) { return acc + curr; });
    };
    Student.prototype.sumAverageGrade = function () {
        var grades = __spreadArray(__spreadArray([], this._examsGrades, true), this._assignmentsGrades, true);
        return this.sumGrades() / grades.length;
    };
    Object.defineProperty(Student.prototype, "examsGrades", {
        set: function (array) {
            if (array.length > 4)
                throw new Error('A pessoa estudante deve possuir no máximo 4 notas de provas');
            this._examsGrades = array;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "assignmentsGrades", {
        set: function (array) {
            if (array.length > 2)
                throw new Error('A pessoa estudante deve possuir no máximo 2 notas de trabalhos');
            this._assignmentsGrades = array;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "enrollment", {
        get: function () {
            return this._enrollment;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}(Person_1.default));
exports.default = Student;
