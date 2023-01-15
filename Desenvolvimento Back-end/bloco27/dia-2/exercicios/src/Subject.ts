export default class Subject {
  constructor(private _name: string) {
    this.name = _name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this.validateSubjectName(value);
    this._name = value;
  }

  private validateSubjectName(subject: string): void {
    if (subject.length < 3)
      throw new Error('O nome tem que possuir no mínimo 3 caracteres');
  }
}
