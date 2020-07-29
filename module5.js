"use strict"
// процедурный код
const name = "Sveta";
const age = 16;
function greet(name, age) {
    console.log(`${name} is ${age} years old`);
}  
greet(name, age);

// объектно ориентированный подход
const user = {
    name: "Sveta",
    age: 16,
    greet() {
        console.log(`${this.name} is ${this.age} years old`);
    } 
}
user.greet();

// Функции конструкторы

const User = function() {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`${this.name} is ${this.age} years old`)
    }
}
// все методы для объектов нужно записывать в свойство prototype функции-конструктора
User.prototype.toShowName = function() {
    console.log(this.name);
}
const user1 = new User("Sveta", 16);
const user2 = new User("Tomoe", 524);
user1.greet();
user2.greet();
user1.toShowName();
user2.toShowName();
console.log(user1);
console.log(user2);

// E56 class
class NewUser {
    static className = "user";
    constructor(name, age) {
        this.name = name;
        this._age = age; // _ показывает наличие get & set
    }
    toShowName() {
        console.log(this.name);
    }
    updateName(val1 =" ", val2 = 0, val3 = "happy"){
        console.log(this.name = val1);
        console.log(this._age = val2);
        console.log(val3);
     }

     // get & set
     get age () {
        return this._age;
     }
     set age (value) {
        return this._age = value;
     }
};

const classUser = new NewUser("Masha", 14);
console.log(classUser);

classUser.updateName("Sveta", 16, " ");

classUser.updateName();

classUser.updateName(null, 30, null);
console.log(classUser.age); // вызов метода get
// classUser.age(20);
console.log(classUser.age = 40); // вызов метода set
console.log(classUser.age); // вызов метода get

// статические св-ва и методы

console.log(NewUser.className);

// наследование 

class SuperNewUser extends NewUser {
    constructor (name, age, superName, superAge) {
        super(name, age);
        this.superName = superName;
        this.superAge = superAge;
    }
    toGreet() {
       console.log("привет");
    }
} 
const newSuperUser = new SuperNewUser("Svetlana", 16, "Светик", 17);
console.log(newSuperUser);

