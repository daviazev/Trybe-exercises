"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./src/Person");
var Student_1 = require("./src/Student");
// ------------------------------ EXERCÍCIO 1 ------------------------------
var valid = new Person_1.default('Davi', new Date('1998-08-10 10:00:00'));
// const invalidName = new Person('Da', new Date('1998-08-10')); // dá erro porque o nome é muito curto
// const invalidDate = new Person('Davi', new Date('2030-08-10')); // dá erro porque essa data é futura
console.log(valid);
// console.log(invalidName);
// console.log(invalidDate);
// ------------------------------ EXERCÍCIO 2 ------------------------------
var student1 = new Student_1.default('Paulo Ricardo', new Date('2002-12-02 20:50:05'));
student1.examsGrades = [1, 2, 3, 4];
student1.assignmentsGrades = [1, 2];
// student1.examsGrades = [1, 2, 3, 4, 5]; // Error: a pessoa estudante deve possuir no máximo 4 notas de provas
// student1.assignmentsGrades = [1, 2, 3, 4]; // Error: A pessoa estudante deve possuir no máximo 2 notas de trabalhos
console.log(student1);
console.log(student1.sumGrades());
console.log(student1.sumAverageGrade());
var testInterfaceEmployee = {
    registration: 'FNC1234567891011',
    salary: 1200.0,
    admissionDate: new Date(),
    generateRegistration: function () {
        var randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return "FNC" + randomStr;
    },
};
console.log(testInterfaceEmployee);
// ------------------------------ EXERCÍCIO 4 ------------------------------
var Subject_1 = require("./src/Subject");
var matematica = new Subject_1.default('Matemática');
var historia = new Subject_1.default('História');
var filosofia = new Subject_1.default('Filosofia');
console.log(matematica);
console.log(historia);
console.log(filosofia);
matematica.name = 'mat';
console.log(matematica);
