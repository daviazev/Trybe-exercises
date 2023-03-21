// Para criar uma classe, basta utilizar a palavra
// reservada class, seguida do nome da classe e um par de chaves.

class Person {
  // Dentro das chaves podemos criar atributos: digitando o nome do atributo e seu tipo.

  name: string;
  height: number;
  weight: number;

  /*
    O método construtor (constructor) é chamado assim que utilizamos a sintaxe 
    de criação de um objeto com a palavra reservada new. O construtor recebe os 
    parâmetros n, h e w, que estão abreviados apenas para deixar explícito que o 
    nome dos parâmetros não é diretamente relacionado ao nome dos atributos que 
    eles populam. Normalmente, eles teriam o mesmo nome (ou seja, n seria name, etc).
  */

  constructor(n: string, h: number, w: number) {
    console.log(`Creating a person ${n}`);

    this.name = n;
    this.height = h;
    this.weight = w;
  }

  //   Ainda entre as chaves da classe podemos criar métodos:
  //   digitando seu nome, os parênteses com os parâmetros e as
  //   chaves com o corpo, assim como uma função normal, só que
  //   sem precisar do function.

  sleep() {
    console.log(`${this.name}: zzzzzzz`);
  }
}
// Observe que com a classe Person, podemos criar dois (ou mais)
// objetos (duas pessoas) diferentes, p1 e p2.

const p1 = new Person('Maria', 171, 58);
const p2 = new Person('João', 175, 66);
console.log(p1.name, p1.height, p1.weight);
console.log(p2.name, p2.height, p2.weight);
p1.sleep();
p2.sleep();

/* 

    Um ponto muito importante é o uso da palavra reservada this. Lembra 
    que você aprendeu que pode criar duas pessoas diferentes?

    Ou seja, elas são dois objetos de uma mesma classe e ambas 
    compartilham dos mesmos atributos, mas com valores diferentes.

    O this serve justamente para representar o objeto em si. Quando, 
    no construtor, escrevemos this.name = n, estamos dizendo que o atributo 
    name do objeto que chamou o método irá possuir o valor n.

    Quando p1 é criada, this se refere a p1, logo, n e name passam a ser “Maria”.

    E quando p2 é criada, this se refere a p2, logo, n e name passam 
    a ser “João”. Do lado de fora usamos a sintaxe objeto.atributo, 
    mas como do lado de dentro não temos como saber qual é o objeto, 
    precisamos utilizar a sintaxe this.atributo.

    O mesmo se aplica aos métodos, como é possível observar com o sleep: 
    ao chamarmos, no final do arquivo, p1.sleep(), o método sleep sabe
    que o this se refere a p1, portanto this.name é “Maria”.

    Ao chamarmos p2.sleep(), o this se refere a p2, e p2.name é “João”.

*/
