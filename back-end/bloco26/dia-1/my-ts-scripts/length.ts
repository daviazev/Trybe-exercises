const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

export function convert(valor: number, ub: string, uc: string): number {
  const fromIndex = units.indexOf(ub);
  const toIndex = units.indexOf(uc);
  const exponent = toIndex - fromIndex;

  return valor * Math.pow(10, exponent);
}

// fiz com o gabarito
