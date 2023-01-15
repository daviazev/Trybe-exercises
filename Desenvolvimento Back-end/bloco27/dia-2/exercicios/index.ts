import Person from './src/Person';
import Student from './src/Student';

// ------------------------------ EXERCÍCIO 1 ------------------------------

const valid = new Person('Davi', new Date('1998-08-10 10:00:00'));
// const invalidName = new Person('Da', new Date('1998-08-10')); // dá erro porque o nome é muito curto
// const invalidDate = new Person('Davi', new Date('2030-08-10')); // dá erro porque essa data é futura

console.log(valid);
// console.log(invalidName);
// console.log(invalidDate);

// ------------------------------ EXERCÍCIO 2 ------------------------------

const student1 = new Student('Paulo Ricardo', new Date('2002-12-02 20:50:05'));

student1.examsGrades = [1, 2, 3, 4];
student1.assignmentsGrades = [1, 2];
// student1.examsGrades = [1, 2, 3, 4, 5]; // Error: a pessoa estudante deve possuir no máximo 4 notas de provas
// student1.assignmentsGrades = [1, 2, 3, 4]; // Error: A pessoa estudante deve possuir no máximo 2 notas de trabalhos

console.log(student1);
console.log(student1.sumGrades());
console.log(student1.sumAverageGrade());
