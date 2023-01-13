// 1 - Crie uma classe chamada Tv, com os atributos:

// brand: marca da TV;
// size: tamanho em polegadas;
// resolution: resolução da tela;
// connections: conexões disponíveis(HDMI, Ethernet, etc.);
// connectedTo: conexão atual Este atributo não precisa ser inicializado no construtor.

// 2 - Dentro da classe Tv, crie o método turnOn, que imprimirá os atributos inicializados no construtor.

// 3 - Instancie um objeto a partir da classe Tv, chame o método turnOn para imprimir seus atributos.

class TV {
  brand: string;
  size: number;
  resolution: string;
  connections: string[];
  connectedTo: string;

  constructor(b: string, s: number, r: string, c: string[]) {
    this.brand = b;
    this.size = s;
    this.resolution = r;
    this.connections = c;
  }

  turnOn() {
    console.log(
      `TV ${this.brand} de ${this.size}' com resolução 
      ${this.resolution}K. Conexões: ${this.connections}`
    );
  }
}

const TV1 = new TV('LG', 50, '4', ['HDMI', 'Ethernet', 'USB']);
TV1.turnOn();
