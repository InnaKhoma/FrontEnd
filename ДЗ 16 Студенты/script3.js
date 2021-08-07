'use strict';

function Student(name, marks) {
    this.name = name;
    this.marks = marks;
}

Student.prototype.averageMark = function() {
    let sum = 0;
    let count = this.marks.length;
    for (let i=0; i<count; i++) {
        sum += this.marks[i];
    }
    return Math.round(sum/count);
}

const students = [
    new Student('Student 1', [10,9,8,0,10]),
    new Student('Student 12', [10,0,8,0,3,4])
];

console.log(students[0].averageMark());
console.log(students[1].averageMark());