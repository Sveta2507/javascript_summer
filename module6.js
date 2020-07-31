"use strict";

const num1 = [4, 9, 78];
const num2 = [0, 48, 5];
const num3 = [8, 3, 1];


// dirty function (функция с побочным эффектом) может изменять значение глобальных функций 
const dirtyFunction = function (array, value) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= value;
    }
    return array;
}

console.log(dirtyFunction(num1, 3));
console.log(num1);
console.log(dirtyFunction(num2, 0));
console.log(dirtyFunction(num3, 2));

// pure function
const pureFunction = function (array, value) {
    const arr = [];
    for(let i = 0; i < array.length; i++) {
        arr.push(array[i] * value);
    } 
    return arr;
};

console.log(pureFunction(num1, 5));
console.log(num1);

// перебираюцие методы массивов
// array.method(callback[currentValue, index, array]); - пример

// method forEach - ничего не возвращает, только перебирает - альтернатива цикла for
num1.forEach((num) => console.log(num)); // show each element
num1.forEach((num) => {
    num += 1;
    return console.log(num);
});
console.log(num1);

// method map returns new array from changed elements of current array
console.log(num1.map(num => {
    return num *= 10;
}))
console.log(num1.map(num => num *= 10));
console.log(num1);

//method filter returns new array from elements of origin array, fits the current array
console.log(num1.filter((num) => num % 2 === 0));

// method find returns one unique element of array
console.log(num1.find((num) => num % 2 === 0));

//method every returns boolean true || false if all elements of array were checked
console.log(num1.every((num) => num % 2 === 0));

//method every returns boolean true || false if one elements of array was checked
console.log(num1.some((num) => num % 2 === 0));

//method sort 
console.log(num1.sort());
console.log(num1.sort((a, b) => a - b)); //1-9
console.log(num1.sort((a, b) => b - b));//9-1


const words = ['apples', 'frog', 'dog', 'application', 'absolute'];
console.log(words.sort());//a-z
console.log(words.reverse());//z-a

//method reduce
// array.nethod(callback[acc, value, array]); - example
console.log(num1.reduce((acc, num) => acc + num, 0));
console.log(num1.reduce((acc, num) => {
    let element = num + 1;
    acc.push(element) 
    return acc;
}, []).sort()
);


