"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleDatabase = exports.ConsoleLogger2 = exports.ConsoleLogger = void 0;
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function (param) {
        console.log(param);
    };
    return ConsoleLogger;
}());
exports.ConsoleLogger = ConsoleLogger;
var ConsoleLogger2 = /** @class */ (function () {
    function ConsoleLogger2() {
    }
    ConsoleLogger2.prototype.log = function (param) {
        console.log('ConsoleLogger 2: ', param);
    };
    return ConsoleLogger2;
}());
exports.ConsoleLogger2 = ConsoleLogger2;
var ExampleDatabase = /** @class */ (function () {
    function ExampleDatabase(logger) {
        if (logger === void 0) { logger = new ConsoleLogger(); }
        this.logger = logger;
    }
    ExampleDatabase.prototype.save = function (key, value) {
        this.logger.log("Valor " + value + " salvo na chave " + key);
    };
    return ExampleDatabase;
}());
exports.ExampleDatabase = ExampleDatabase;
