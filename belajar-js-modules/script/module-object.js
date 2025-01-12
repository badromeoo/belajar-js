

function sayHello(name) {
    console.log(`Hello, ${name} dari module-object function!`);
}

class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    sayHello() {
        console.log(`Hello, ${this.firstname} ${this.lastname} dari module-object class!`);
    }
    sayBye() {
        console.log(`Bye, ${this.firstname} ${this.lastname} dari module-object class!`);
    }
}
const firstname= "gus";
const lastname= "nakal";
export const dataA = { firstname, lastname, sayHello, Person };