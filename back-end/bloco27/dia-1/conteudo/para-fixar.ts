// 1 - Crie uma classe chamada Tv, com os atributos:

// brand: marca da TV;
// size: tamanho em polegadas;
// resolution: resolução da tela;
// connections: conexões disponíveis(HDMI, Ethernet, etc.);
// connectedTo: conexão atual Este atributo não precisa ser inicializado no construtor.

// 2 - Dentro da classe Tv, crie o método turnOn, que imprimirá os atributos inicializados no construtor.

// 3 - Instancie um objeto a partir da classe Tv, chame o método turnOn para imprimir seus atributos.

// Utilizando o mesmo código dos exercícios de fixação anteriores:

// 5 - Altere a visibilidade dos atributos definidos na classe Tv para private.

// 6 - Crie um método getter e um setter para o atributo _connectedTo, da classe Tv.

// O setter deverá verificar se o valor definido está entre as conexões disponíveis (_connections) e:
//  - Em caso positivo, definir este valor para o atributo _connectedTo;
//  - Em caso negativo, imprimir no console a mensagem “Sorry, connection unavailable!”

// 7 - Defina um valor para o atributo _connectedTo por meio do método setter criado e imprima seu valor.

class TV {
  private brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo: string;

  constructor(b: string, s: number, r: string, c: string[]) {
    this.brand = b;
    this._size = s;
    this._resolution = r;
    this._connections = c;
  }

  turnOn() {
    console.log(
      `TV ${this.brand} de ${this._size}' com resolução 
      ${this._resolution}K. Conexões: ${this._connections}`
    );
  }

  get connectedTo() {
    return this._connectedTo;
  }

  set connectedTo(value: string) {
    if (this._connections.some((v) => v === value)) {
      this._connectedTo = value;
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
}

const TV1 = new TV('LG', 50, '4', ['HDMI', 'Ethernet', 'USB']);
TV1.turnOn();
TV1.connectedTo = 'HDMI';
