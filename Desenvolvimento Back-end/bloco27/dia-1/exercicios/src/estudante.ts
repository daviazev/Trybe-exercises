class Student {
  matricula: string;
  nome: string;
  notasProva: number[];
  notasTrabalhos: number[];

  constructor(
    matricula: string,
    nome: string,
    notasProvas: number[],
    notasTrabalhos: number[]
  ) {
    this.matricula = matricula;
    this.nome = nome;
    this.notasProva = notasProvas;
    this.notasTrabalhos = notasTrabalhos;
  }

  somaDasNotas(): number {
    const provas = this.notasProva.reduce((acc, curr) => acc + curr);
    const trabalhos = this.notasTrabalhos.reduce((acc, curr) => acc + curr);
    return provas + trabalhos;
  }

  mediaDasNotas(): number {
    const provas = this.notasProva.reduce((acc, curr) => acc + curr);
    const trabalhos = this.notasTrabalhos.reduce((acc, curr) => acc + curr);
    return (
      (provas + trabalhos) /
      (this.notasProva.length + this.notasTrabalhos.length)
    );
  }
}
