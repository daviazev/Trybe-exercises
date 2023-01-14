"use strict";
exports.__esModule = true;
var Animal = /** @class */ (function () {
    /*
      Ao invés de declarar os atributos antes do construtor, receber parâmetros
      no construtor e colocá-los nos atributos da classe, se não formos
      validar, podemos utilizar uma forma simplificada de escrita, simplesmente
      colocando o modificador de visibilidade na frente
      do nome do parâmetro no construtor
  
      Exemplo
      O seguinte código:
  
      public x: number
      constructor(x: number) { this.x = x }
  
      Pode ser substituído por:
  
      constructor(public x: number) { }
      
      Obs: Usando essa sintaxe é necessário indicar explicitamente
      logo antes do nome do atributo se ele é public, private, protected ou readonly
    */
    function Animal(birthDate) {
        this.birthDate = birthDate;
    }
    Object.defineProperty(Animal.prototype, "age", {
        get: function () {
            /*Para operar com datas, vamos operar somente com milissegundos. Uma data
            é o número de milissegundos desde o dia 01/01/1970 (era Unix).*/
            var timeDiff = Math.abs(Date.now() - new Date(this.birthDate).getTime());
            /*Convertendo de volta para o número de anos inteiros, considerando anos bissextos.
            Tente entender a lógica abaixo: como converter de milissegundos para anos?*/
            return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
        },
        enumerable: false,
        configurable: true
    });
    return Animal;
}());
exports["default"] = Animal;
