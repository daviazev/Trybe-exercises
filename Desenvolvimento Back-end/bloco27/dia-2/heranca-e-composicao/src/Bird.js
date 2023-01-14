"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bird = /** @class */ (function () {
    function Bird(name, birthDate) {
        this.name = name;
        this.birthDate = birthDate;
    }
    Object.defineProperty(Bird.prototype, "age", {
        get: function () {
            var timeDiff = Math.abs(Date.now() - new Date(this.birthDate).getTime());
            return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
        },
        enumerable: false,
        configurable: true
    });
    Bird.prototype.getBirthDate = function () {
        return this.birthDate;
    };
    Bird.prototype.fly = function () {
        console.log(this.name + " est\u00E1 voando!");
    };
    return Bird;
}());
exports.default = Bird;
