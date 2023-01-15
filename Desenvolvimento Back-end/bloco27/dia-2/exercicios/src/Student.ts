import Person from './Person';

export default class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[] = [];
  private _assignmentsGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
  }

  generateEnrollment(): string {
    return `Student: ${this.name} - ${new Date().getTime()}`;
  }

  sumGrades(): number {
    const grades = [...this._examsGrades, ...this._assignmentsGrades];

    return grades.reduce((acc, curr) => acc + curr);
  }

  sumAverageGrade(): number {
    const grades = [...this._examsGrades, ...this._assignmentsGrades];

    return this.sumGrades() / grades.length;
  }

  set examsGrades(array: number[]) {
    if (array.length > 4)
      throw new Error(
        'A pessoa estudante deve possuir no máximo 4 notas de provas'
      );

    this._examsGrades = array;
  }

  set assignmentsGrades(array: number[]) {
    if (array.length > 2)
      throw new Error(
        'A pessoa estudante deve possuir no máximo 2 notas de trabalhos'
      );

    this._assignmentsGrades = array;
  }

  get enrollment(): string {
    return this._enrollment;
  }
}
