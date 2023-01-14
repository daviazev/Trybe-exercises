export default class Person {
  private _name: string;
  private _birthDate: Date;

  constructor(name: string, birthDate: Date) {
    this._name = name;
    this._birthDate = birthDate;
  }

  get name(): string {
    return this._name;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set name(name: string) {
    if (name.length >= 3) {
      this._name = name;
    }
  }

  set birthDate(date: Date) {
    this.validateDate(date);
    this._birthDate = date;
  }

  // isso aqui eu fiz com ajuda do gabarito
  static getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
    const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
    return Math.floor(diff / yearMs);
  }

  private validateDate(date: Date): void {
    if (date.getTime() > new Date().getTime())
      throw new Error('Vc nasceu no futuro?');

    if (Person.getAge(date) > 120)
      throw new Error('A pessoa deve ter no máximo 120 anos.');
  }
}
