'use strict';

const user = {
    firstName: "Nikola",
    secondName: "Tesla",
    getFullName: function() {
        console.log(this.firstName + " " + this.secondName);
    }
}

user.getFullName();

const user2 = user.getFullName;
user2.call({firstName: "Steve", secondName: "Jobs"});

const user3 = user.getFullName;
user3.apply({firstName: "Steve", secondName: "Wozniak "});

const getFullNameCopy = user.getFullName;
const user4 = getFullNameCopy.bind({firstName: "Julia", secondName: "Roberts"});
user4();

function Person(name, surname, age){
    this.firstName = name;
    this.secondName = surname;
    this.age = age;
    this.print = function () {
        console.log(this.firstName + " " + this.secondName + ", " + this.age);
    }
}

const firstPerson = new Person("Nikola", "Tesla", 47);
const secondPerson = new Person("Steve", "Jobs", 54);
const thirdPerson = new Person("Julia", "Roberts", 35);

firstPerson.print();
secondPerson.print();
thirdPerson.print();