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
//console.log(makeStudentsReport(testData));

const studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology',
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics',
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science',
  },
];

function enrollInSummerSchool(students) {
  return students.map(e => {
    e.status = 'In Summer School';
    return e;
  });
}

const scratchData = [
  { id: 22, foo: 'bar' },
  { id: 28, foo: 'bizz' },
  { id: 19, foo: 'bazz' },
];

function findById(items, idNum) {
  return items.find(e => idNum === e.id);
}

function validateKeys(object, expectedKeys) {
  let validation = true;

  if (Object.keys(object).length !== expectedKeys.length) {
    return false;
  }
  expectedKeys.forEach(e => {
    if (!object.hasOwnProperty(e)) {
      validation = false;
    }
  });
  return validation;
}
