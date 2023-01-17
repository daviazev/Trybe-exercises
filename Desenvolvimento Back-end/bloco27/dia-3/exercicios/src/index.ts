import Clube from './Clube';
import QuadraFutebol from './QuadraFutebol';
import QuadraTenis from './QuadraTenis';

const spfc = new Clube();

const morumbi = new QuadraFutebol();

spfc.adicionarQuadra(morumbi);

const reservarQuadra = spfc
  .buscarQuadra<QuadraFutebol>(0)
  .reservar(new Date('2023-01-18 18:00:00'));

console.log(reservarQuadra);

// -------------------------------------------------------------

const madrid = new Clube();
console.log(madrid);

const bernabeu = new QuadraTenis();

console.log('---------', bernabeu);

madrid.adicionarQuadra(bernabeu);

const reservar = madrid
  .buscarQuadra<QuadraTenis>(0)
  .reservar(new Date('2023-01-18 18:00:00'));

console.log('>>>>>>', reservar);
