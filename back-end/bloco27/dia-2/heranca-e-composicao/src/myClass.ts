interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

export default class MyClass implements MyInterface {
  constructor(public myNumber: number) {}

  myFunc(myParam: number) {
    return `${this.myNumber} + ${myParam} = ${this.myNumber + myParam}`;
  }
}
