// Type Aliases

type Point = {
  x: number;
  y: number;
};

function printCoord(pt: Point) {
  console.log('O valor da cordenada x é: ' + pt.x);
  console.log('O valor da coordenada y é: ' + pt.y);
}

printCoord({ x: 100, y: 100 });
//saída:
//O valor da cordenada x é: 100
//O valor da cordenada y é: 100

type Bird = {
  qttAsas: number;
  qttPatas: number;
  peso: string;
};

type Sum = (x: number, y: number) => number;

type Address = {
  cep: number;
  cidade: string;
  bairro: string;
  rua: string;
  numero: number;
};

// Type Unions

// A função abaixo pode receber tanto um número
// quanto uma string.
function imprimirCPF(cpf: number | string) {
  console.log('Seu CPF é: ' + cpf);
}

imprimirCPF(11111111111);
// Saída:
// Seu CPF é: 11111111111
imprimirCPF('111.111.111-11');
// Saída:
// Seu CPF é: 111.111.111-11

type StatesOfMatter = 'liquido' | 'sólido' | 'gasoso';

type docIdentifier = number | string;

type SO = 'windows se possível evite' | 'linux top' | 'mac ai sim mano';

type Vowels = 'a' | 'e' | 'i' | 'o' | 'u';
