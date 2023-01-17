import IAgenda from './interfaces/IAgenda';
import ITenis from './interfaces/ITenis';
import normas from './normas/normasDeUso';
import Quadra from './Quadra';

export default class QuadraTenis extends Quadra {
  public tenisData: ITenis = normas.tenis;

  public reservar<ITenis>(date: Date): IAgenda<ITenis> {
    return {
      protocolo: `protocolo: ${new Date().getTime()}`,
      data: date,
      regras: this.tenisData as unknown as ITenis,
    };
  }
}
