class Data {
  private _dia: number;
  private _mes: number;
  private _ano: number;

  constructor(dia: number, mes: number, ano: number) {
    this._dia = dia;
    this._mes = mes;
    this._ano = ano;

    if (dia > 31 || mes > 12 || ano > 2023) {
      this._dia = 1;
      this._mes = 1;
      this._ano = 1900;
    }
  }

  meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  getMonthName() {
    const mesPorExtenso = this.meses.find(
      (_mes, index) => index === this._mes - 1
    );
    return mesPorExtenso;
  }

  isLeapYear(): boolean {
    if (this._ano % 4 === 0) return true;
    return false;
  }
}
