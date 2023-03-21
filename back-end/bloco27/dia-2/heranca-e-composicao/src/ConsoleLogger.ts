interface Logger {
  log(str: string): void;
}

interface Database {
  logger: Logger;
  save(key: string, value: string): void;
}

export class ConsoleLogger implements Logger {
  log(param: string) {
    console.log(param);
  }
}

export class ConsoleLogger2 implements Logger {
  log(param: string) {
    console.log('ConsoleLogger 2: ', param);
  }
}

export class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) {}

  save(key: string, value: string) {
    this.logger.log(`Valor ${value} salvo na chave ${key}`);
  }
}
