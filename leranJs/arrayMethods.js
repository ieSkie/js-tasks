//Нужно сделать:
//Создать новый массив, где у каждого студента добавлено поле average (средний балл)
//Найти студента с самым высоким средним баллом
//Получить массив имён студентов, у которых средний балл >= 4.5
//Посчитать общее количество всех оценок у всех студентов
//функции getTopStudent getTopNames getTotalScores

const students = [
  { name: "Alice", scores: [5, 4, 5, 5] },
  { name: "Bob", scores: [3, 3, 4] },
  { name: "Charlie", scores: [5, 5, 5, 5] },
  { name: "David", scores: [4, 4, 4] },
];

const students2 = students.map((student) => ({
  ...student,
  average:
    student.scores.reduce((sum, score) => {
      return sum + score;
    }, 0) / student.scores.length,
}));

function getTopStudent() {
  const result = [...students2].sort((a, b) => {
    return b.average - a.average;
  });

  return result[0].name;
}

function getTopNames() {
  const filtredStudents = students2
    .filter((student) => student.average >= 4.5)
    .map((student) => student.name);

  return filtredStudents;
}

function getTotalScores() {
  const arr = students2
    .map((student) => student.scores.length)
    .reduce((sum, el) => sum + el);

  return arr;
}

console.log(getTopStudent(students2));
console.log(getTopNames(students2));
console.log(getTotalScores(students2));
