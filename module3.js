"use strict";

// обЪекты - cостоят из методов и свойств

const ok = {
    key_1: "value",
    key_2: 30,
    key_3: true,
    toShowKeys() {
        console.log(this.key_1, this.key_2, this.key_3, this.key_4);
    }
};

console.log(ok);
console.log(ok.key_1);
console.log(ok.key_2);
console.log(ok.key_3);
ok.toShowKeys();
ok.key_1 = "javascript";
ok.toShowKeys();
ok.key_4 = "misery";
ok.toShowKeys();
delete ok.key_4;
ok.toShowKeys();

// for in

for (let key in ok) {
    console.log("каждое отдельное свойство", key); 
    console.log("каждое значение свойства", ok[key]);
}

const allKeys = Object.keys(ok);
console.log("преобразовать свойство в массив ключей", allKeys);

const allValues = Object.values(ok);
console.log("преобразовать свойство в массив значений", allValues);

const allEntries = Object.entries(ok);
console.log("преобразовать свойство в массив пар, ключ - значение", allEntries);

for (let elem of allEntries) {
    // console.log(elem);
    console.log(`${elem[0]}: ${elem[1]}`)
}

// операции rest и spread
// rest - собирает в кучу
// spread - распыляет
const numbers = [1, 2, 3, 4, 5];
// const min = Math.min(numbers); - не будет работать
let min = Math.min(1, 2, 3, 4, 5);
console.log(min);
min = Math.min(...numbers);
console.log(min);

const newNumbersArray = [...numbers];
console.log(newNumbersArray);
// pop - удаляет последний элемент массива
newNumbersArray.pop();
console.log(newNumbersArray);
console.log("исходный массив", numbers);

//распыление объектов
const strawberry = {
    name: "strawberry",
}

const bananas = {
    name: "bananas",
}

const coctail = Object.assign({}, strawberry, bananas)
console.log(coctail);

const newCoctail = {
    ...strawberry, ...bananas
}
console.log(newCoctail);

function toDoCoctail(...args) {
    console.log(args);
}
toDoCoctail(1, 2, 3);
toDoCoctail(1, 2, 3, 4, 5);
toDoCoctail();

function toGetData(email, ...args) {
    console.log(args); // restим функцию
    console.log(email);
}
toGetData("123@gail.com", 1, 2, 3);
toGetData("123@gail.com", 1, 2);
toGetData("123@gail.com", 1, 2, 3, 4, 5);

// деструктуризация объектов

const user = {
    name: "sveta",
    age: 16,
    eyeColor: "green",
}
console.log(user);
console.log(user.name, user.age, user.eyeColor);
const {name:userName, age, eyeColor, newAge = 17} = user;
console.log(userName, age, eyeColor, newAge);
console.log(user);

// деструктуризация массивов

const fruits = [["bananas", "oranges", "kiwis"], ["apples", "strawberry", "cherry"]];
console.log(fruits[0]);
console.log(fruits[1]);
const [tropical, regional] = fruits;

console.log(tropical);
console.log(regional);