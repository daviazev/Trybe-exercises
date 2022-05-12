const allLessons = {
    lesson1:
     { 
        materia: 'Matemática',
        numeroEstudantes: 20,
        professor: 'Maria Clara',
        turno: 'manhã' 
    },
    lesson2:
     { 
        materia: 'História',
        numeroEstudantes: 20,
        professor: 'Carlos',
        turno: 'noite' 
    },
    lesson3:
     { 
        materia: 'Matemática',
        numeroEstudantes: 10,
        professor: 'Maria Clara',
        turno: 'noite' 
    }
};

// 🚀 Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

const totalStudentsMath = (obj) => {
    return obj.lesson2.numeroEstudantes + obj.lesson3.numeroEstudantes;
}

console.log(totalStudentsMath(allLessons));

// 🚀 Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

const  relatorio = (obj, prof) => {
    if (prof === 'Maria Clara') {
        return `A ${prof} ministrou as aulas de ${obj.lesson1.materia}. Quantidade de alunos: ${obj.lesson1.numeroEstudantes + obj.lesson3.numeroEstudantes}`;
    } else if (prof === 'Carlos') {
        return `O ${prof} ministrou as aulas de ${obj.lesson2.materia}. Quantidade de alunos: ${obj.lesson1.numeroEstudantes}`
    }
}

console.log(relatorio(allLessons, 'Carlos'));


// ABAIXO, COMO AS RESPOSTAS ESTÃO NO GABARITO - ESTUDÁ-LAS


// --------------------------- 1
const getNumberOfStudentsMath = (obj) => {
    let total = 0;
    const array = Object.keys(obj);
    for (index in array) {
      if(obj[array[index]].materia === 'Matemática'){
      total += obj[array[index]].numeroEstudantes;
      }
    }
    return total;
  }
  console.log(getNumberOfStudents(allLessons));

// --------------------------- 2
  const getInfo = (obj, name) => {
    const allLessons = [];
    let allStudent = 0;
    const array = Object.values(obj);
    for (index in array) {
      if (array[index].professor === name) {
        allLessons.push(array[index].materia)
        allStudent += array[index].numeroEstudantes;
      }
    }
    return { lessons: allLessons, estudantes: allStudent };
  }
  
  const createReport = (allLessons, name) => {
    const report = {};
    report.professor = name;
    Object.assign(report, getInfo(allLessons, name));
    return report;
  }
  console.log(createReport(allLessons, 'Maria Clara'));
  