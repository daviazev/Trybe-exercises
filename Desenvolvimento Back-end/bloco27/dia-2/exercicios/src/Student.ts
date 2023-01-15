import Person from './Person';

class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[];
  private _assignmentsGrades: number[];

  constructor(
    enrollment: string,
    examsGrades: number[],
    assignmentsGrades: number[]
  ) {
    super();
    this._enrollment = enrollment;
    this._examsGrades = examsGrades;
    this._assignmentsGrades = assignmentsGrades;
  }
}
