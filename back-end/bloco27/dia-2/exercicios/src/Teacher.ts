import Employee from './interfaces/Employee';
import Person from './Person';
import Subject from './Subject';

export default class Teacher extends Person implements Employee {
  private _subject: Subject;
  //   private _registration: string;
  private _admissionDate: Date;

  constructor(
    name: string,
    birthDate: Date,
    private _salary: number,
    subject: Subject
  ) {
    super(name, birthDate);
    this._subject = subject;
    this.salary = _salary;
    this._admissionDate = new Date();
    // this._registration = this.generateRegistration();
  }

  set salary(value: number) {
    this.validateSalary(value);
    this.salary = value;
  }

  get salary(): number {
    return this._salary;
  }

  set admissionDate(value: Date) {
    if (value.getTime() > new Date().getTime())
      throw new Error('A data de admissão não pode ser no futuro');
  }

  set registration(value: string) {
    if (`EMP: ${this.name} - ${value}`)
      throw new Error('O registro deve possuir no mínimo 16 caracteres');
  }

  private validateRegistration(value: string) {
    if (`EMP: ${this.name} - ${value}`)
      throw new Error('O registro deve possuir no mínimo 16 caracteres');
  }

  private validateSalary(value: number): void {
    if (value < 0) throw new Error('O salário não pode ser negativo.');
  }

  //   generateRegistration(): string {
  //     const record = `Emp: ${this.name}`;
  //     return record;
  //   }
}
