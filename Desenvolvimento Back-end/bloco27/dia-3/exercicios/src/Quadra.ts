import IAgenda from './interfaces/IAgenda';

export default abstract class Quadra {
  protected abstract reservar<T>(date: Date): IAgenda<T>;
}
