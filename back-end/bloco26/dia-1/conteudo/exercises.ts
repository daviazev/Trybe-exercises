// ./exercises.ts

export function getSquareArea(side: number): number {
  return side ** 2;
}

export function getRectangleArea(base: number, height: number): number {
  return base * height;
}

export function getTriangleArea(base: number, height: number): number {
  return (base * height) / 2;
}

export function getPolygonPerimeter(sides: number[]): number {
  return sides.reduce((acc, side) => acc + side, 0);
}

export function triangleCheck(
  sideA: number,
  sideB: number,
  sideC: number
): boolean {
  const checkSideA = sideB - sideC < sideA && sideA < sideB + sideC;
  const checkSideB = sideA - sideC < sideB && sideB < sideA + sideC;
  const checkSideC = sideA - sideB < sideC && sideC < sideA + sideB;
  return checkSideA && checkSideB && checkSideC;
}

export function losango(sideD: number, sided: number): number {
  return (sideD * sided) / 2;
}

export function trapezio(sideB: number, sideb: number, height: number): number {
  return ((sideB + sideb) * height) / 2;
}

export function circulo(raio: number): number {
  const PI: number = 3.1415;

  return PI * raio ** 2;
}
