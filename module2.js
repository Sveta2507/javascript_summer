// массивы
// const arr = ['1', '2', '3'];
// console.log(arr);
// console.log('элемент в индексе 0 - ', arr[0]);
// console.log('элемент в индексе 1 - ', arr[1]);
// console.log('элемент в индексе 2 - ', arr[2]);
// console.log('элемент в индексе 3 - ', arr[3]);

// arr[0] = 'js';
// console.log(arr);
// const arrayLength = arr.length;
// console.log(arrayLength);

// // итерация по массиву
// const numbersArray = [16,159,349,75,256,765,35,6,34757]
// for (let i = 0; i < numbersArray.length; i += 1) {
//     console.log(`элемент в индексе ${i} - `, numbersArray[i]);
// }

// for (let i = 0; i < 4; i += 1) {
//     numbersArray.push("js");
//     console.log(`элемент в индексе ${i} - `, numbersArray[i]);
// }


// for (let elem of numbersArray) {
//     console.log(elem);
//     // numbersArray.push(elem += 1);
// }
// console.log(numbersArray);

// // присвоение значений
// // значения примитивов копируются в новую переменную
// let a = 5;
// let b = a;
// console.log('a:', a, 'b:', b);
// a = 10;
// console.log('a:', a, 'b:', b);
// // значения объектов, массивов и функций копируется по ссылке
// const array1 = [1,2,3,4,5];
// const array2 = array1;
// console.log(array1 === array2);

// const array3 = array1.slice();
// console.log(array1 === array3);
// console.log(array1, array3);

// array2.push("js");
// console.log(array1, array2, array3);

// array2.unshift("html");
// console.log(array1, array2, array3);

// array3.pop();
// array3.shift();
// console.log(array1, array2, array3);

// // методы split и join
// const str1 = "яблоки, апельсины, сливы";
// // const arr1 = str1.split(" ");
// // console.log(arr1);
// const arr1 = str1.split(",");
// console.log(arr1);

// const newstr = arr1.join("-");
// console.log(newstr);

// // indexOf -  возвращает первый индекс искомого элемента
// console.log(array1.indexOf("js"));
// console.log(array1.indexOf("css"));
// console.log(array1.indexOf(3));

// // includes - без конкретики
// console.log(array1.includes("js"));
// console.log(array1.includes("css"));
// console.log(array1.includes(3));

// // splice
// // заменяет или удаляет заданное значение



// let allArrays = array1.concat(array2).concat(array3);
// // let allArrays = array1.concat(array2, array3);
// console.log(allArrays);


// функции
// funtction expression - нельзя вызывать до объявления
const func = function (a, b) {
    return a + b;
}
console.log(func(2, 3)); // 2 + 3 = 5

// arrow function - нельзя вызывать до объявления
const func1 = (a, b) => a - b;
console.log(func1(9, 8)); // 9 - 8 = 1

const func2 = c => console.log(c);
func2("Hello world");

// function declaration - можно вызвать перед объявлением
function decl (par1, par2) {
    return console.log(par1 * par2);
}
decl(3, 4); // 3 * 4 = 12

// параметры по умолчанию
const toBuyProducts = function (product = 'milk', count = 1) {
    return console.log(` I bought ${count} of ${product}`)
}
toBuyProducts('bread', 8);
toBuyProducts(8, 'bread');
toBuyProducts(8); //count undefined
toBuyProducts('apples');
toBuyProducts();

// псевдомассив arguments
const total = function () {
    let sum = 0;
    for (const argument of arguments) {
        sum += argument;
    }
    return sum;
}
console.log(total(2, 6)); //8
console.log(total(7, 89, 8, 5)); //109

const total1 = (...args) => {
    console.log(args);
    let total = 0;
    for (const arg of args) {
        total += arg;
    }
    console.log(total);
}
total1(1, 2, 3);
 
// преобразовние псевдомассивов arguments в нормальный массив
// в arguments нет многих свойств
const func3 = function() {
const array = [1,2,3];
console.log("обычный массив", array);
console.log("Псевдомассив", arguments);
const newArray = Array.from(arguments);
console.log("Преобразованный массив", newArray);
}
func3(1,2,3);

// guard clause
const addNewUser = function (age) {
    if (age < 16 || age > 21) {
        console.log('Мы не можем Вас добавить');
    } else if ( age >= 16 && age <= 22) {
        console.log("Поздравляем! Вы студент!");
    } else {
        console.log("Вы ввели неправилтные данные");
    }
};
addNewUser(15);
addNewUser(32);
addNewUser(18);
addNewUser("Hello");

const addNewUser1 =  function (age) {
    if (age < 16 || age > 21) {
        return console.log("Мы не можем Вас добавить");
    }
    if ( age >= 16 && age <= 22) {
        return console.log("Поздравляем! Вы студент!");
    }
    console.log("Вы ввели неправилтные данные");
};

const fourthfunction = function () {
    console.log("Начало выполнения функции 1");
    console.log("Окончание выполнения функции 1");
}
const firstfunction = function () {
    console.log("Начало выполнения функции 2");
    firstfunction();
    console.log("Окончание выполнения функции 2");
}
const secondfunction = function () {
    console.log("Начало выполнения функции 3");
    secondfunction();
    console.log("Окончание выполнения функции 3");
}
const thirdfunction = function () {
    console.log("Начало выполнения функции 4");
    thirdfunction();
    console.log("Окончание выполнения функции 4");
};
fourthfunction();

const mainfunc = function (a, b, c) {
    console.log(a());
    console.log(b());
    console.log(c());
}
const toGo = function() {
    console.log("I am going");
}

const toRun = function() {
    console.log("I am running");
}

const toJump = function() {
    console.log("I am jumping");
}
mainfunc(toGo, toRun, toJump);
