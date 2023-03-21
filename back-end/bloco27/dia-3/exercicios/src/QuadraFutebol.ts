import IFutebol from './interfaces/IFutebol';
import Quadra from './Quadra';
import normas from './normas/normasDeUso';
import IAgenda from './interfaces/IAgenda';

export default class QuadraFutebol extends Quadra {
  public futebolData: IFutebol = normas.futebol;

  public reservar<IFutebol>(date: Date): IAgenda<IFutebol> {
    return {
      protocolo: `protocolo: ${new Date().getTime()}`,
      data: date,
      regras: this.futebolData as unknown as IFutebol,
    };
  }
}
