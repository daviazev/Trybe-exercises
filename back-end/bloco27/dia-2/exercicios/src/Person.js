"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(_name, _birthDate) {
        this._name = _name;
        this._birthDate = _birthDate;
        this.name = _name;
        this.birthDate = _birthDate;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this.validateName(name);
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "birthDate", {
        get: function () {
            return this._birthDate;
        },
        set: function (date) {
            this.validateDate(date);
            this._birthDate = date;
        },
        enumerable: false,
        configurable: true
    });
    // isso aqui eu fiz com ajuda do gabarito
    Person.getAge = function (value) {
        var diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
        var yearMs = 31536000000; // 1 ano = 31536000000 milissegundos
        return Math.floor(diff / yearMs);
    };
    Person.prototype.validateName = function (name) {
        if (name.length < 3)
            throw new Error('o nome deve ter 3 ou mais caracteres!');
    };
    Person.prototype.validateDate = function (date) {
        if (date.getTime() > new Date().getTime())
            throw new Error('Vc nasceu no futuro?');
        if (Person.getAge(date) > 120)
            throw new Error('A pessoa deve ter no máximo 120 anos.');
    };
    return Person;
}());
exports.default = Person;
