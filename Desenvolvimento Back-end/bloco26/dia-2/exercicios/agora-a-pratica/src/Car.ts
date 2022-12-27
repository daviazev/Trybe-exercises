class Car {
  brand: string;
  color: string;
  doors: number;

  constructor(brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk() {
    console.log('bip bip');
  }

  turnOn() {
    console.log('Carro ligado');
  }

  turnOff() {
    console.log('Carro desligado');
  }

  speedUp() {
    console.log('Carro acelerando');
  }

  speedDown() {
    console.log('Reduzindo a velocidade do carro');
  }

  stop() {
    console.log('Carro parado');
  }

  turn(direction: string): void {
    console.log(`Virando carro para a ${direction}`);
  }
}

export default Car;
