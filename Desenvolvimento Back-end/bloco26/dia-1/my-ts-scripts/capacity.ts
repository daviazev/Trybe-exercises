const units = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

export function convert(valor: number, ub: string, uc: string): number {
  const fromIndex = units.indexOf(ub);
  const toIndex = units.indexOf(uc);
  const exponent = toIndex - fromIndex;

  return valor * Math.pow(10, exponent);
}
