export default class Person {
  constructor(private _name: string, private _birthDate: Date) {
    this.name = _name;
    this.birthDate = _birthDate;
  }

  get name(): string {
    return this._name;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set name(name: string) {
    this.validateName(name);
    this._name = name;
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

  private validateName(name: string): void {
    if (name.length < 3)
      throw new Error('o nome deve ter 3 ou mais caracteres!');
  }

  private validateDate(date: Date): void {
    if (date.getTime() > new Date().getTime())
      throw new Error('Vc nasceu no futuro?');

    if (Person.getAge(date) > 120)
      throw new Error('A pessoa deve ter no máximo 120 anos.');
  }
}
