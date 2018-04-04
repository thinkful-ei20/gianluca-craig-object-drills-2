'use strict';

function makeStudentsReport(data) {
  return data.map(e => {
    return `${e['name']}: ${e['grade']}`;
  });
}

const testData = [
  { name: 'Jane Doe', grade: 'A' },
  { name: 'John Dough', grade: 'B' },
  { name: 'Jill Do', grade: 'A' },
];
console.log(makeStudentsReport(testData));