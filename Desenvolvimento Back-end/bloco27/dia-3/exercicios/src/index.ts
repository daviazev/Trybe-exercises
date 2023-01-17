import Clube from './Clube';
import QuadraFutebol from './QuadraFutebol';

const spfc = new Clube();

const morumbi = new QuadraFutebol();

spfc.adicionarQuadra(morumbi);

const reservarQuadra = spfc
  .buscarQuadra<QuadraFutebol>(0)
  .reservar(new Date('2023-01-18 18:00:00'));

console.log(reservarQuadra);
