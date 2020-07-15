// массивы
const arr = ['1', '2', '3'];
console.log(arr);
console.log('элемент в индексе 0 - ', arr[0]);
console.log('элемент в индексе 1 - ', arr[1]);
console.log('элемент в индексе 2 - ', arr[2]);
console.log('элемент в индексе 3 - ', arr[3]);

arr[0] = 'js';
console.log(arr);
const arrayLength = arr.length;
console.log(arrayLength);

// итерация по массиву
const numbersArray = [16,159,349,75,256,765,35,6,34757]
for (let i = 0; i < numbersArray.length; i += 1) {
    console.log(`элемент в индексе ${i} - `, numbersArray[i]);
}

for (let i = 0; i < 4; i += 1) {
    numbersArray.push("js");
    console.log(`элемент в индексе ${i} - `, numbersArray[i]);
}


for (let elem of numbersArray) {
    console.log(elem);
    // numbersArray.push(elem += 1);
}
console.log(numbersArray);

// присвоение значений
// значения примитивов копируются в новую переменную
let a = 5;
let b = a;
console.log('a:', a, 'b:', b);
a = 10;
console.log('a:', a, 'b:', b);
// значения объектов, массивов и функций копируется по ссылке
const array1 = [1,2,3,4,5];
const array2 = array1;
console.log(array1 === array2);

const array3 = array1.slice();
console.log(array1 === array3);
console.log(array1, array3);

array2.push("js");
console.log(array1, array2, array3);

array2.unshift("html");
console.log(array1, array2, array3);

array3.pop();
array3.shift();
console.log(array1, array2, array3);

// методы split и join
const str1 = "яблоки, апельсины, сливы";
// const arr1 = str1.split(" ");
// console.log(arr1);
const arr1 = str1.split(",");
console.log(arr1);

const newstr = arr1.join("-");
console.log(newstr);

// indexOf -  возвращает первый индекс искомого элемента
console.log(array1.indexOf("js"));
console.log(array1.indexOf("css"));
console.log(array1.indexOf(3));

// includes - без конкретики
console.log(array1.includes("js"));
console.log(array1.includes("css"));
console.log(array1.includes(3));

// splice
 
let allArrays = array1.concat(array2).concat(array3);
// let allArrays = array1.concat(array2, array3);
console.log(allArrays);
