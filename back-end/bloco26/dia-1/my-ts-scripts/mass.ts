const mass = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

export function convert(value: number, from: string, to: string): number {
  const fromUn = mass.indexOf(from);
  const toUn = mass.indexOf(to);
  const result = toUn - fromUn;

  return value * Math.pow(10, result);
}
