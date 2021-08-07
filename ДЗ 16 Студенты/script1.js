'use strict';

const personJohn = {
    name: "John",
    sayHello: function() {
        console.log(`Hello, I'm ${this.name}`);
    }
};

const sysAdmin = {
    name: "Bob",
    __proto__: personJohn
};

const clientNatalia = {
    name: "Natalia",
    __proto__: personJohn
};

console.log(sysAdmin.sayHello());
console.log(clientNatalia.sayHello());