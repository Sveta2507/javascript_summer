console.log("Интерпретатор");
console.log("переводит");
console.log("код");
console.log("на");
console.log("язык");
console.log("понятный");
console.log("машине");

let sum;
console.log(sum); //undefined
sum = 2 + 3;
console.log(sum);
console.log(typeof sum);//numer
sum = "2" + 3;
console.log(sum);
sum = "2" + "3";
console.log(typeof sum);//string
sum = false;
console.log(typeof sum);//boolean

//взаимодействие с пользователем
// const greet = alert("Hey");
// console.log(greet); // undefined

// const ask = confirm("Hey?");
// console.log(ask);

// const enter = prompt("Enter your name please");
// console.log(enter);

console.log(14%5);//0

console.log(666%5);//1

console.log(23%5);//3

console.log(14%5);//4

console.log(5%5);//0

console.log(2**3);
console.log(2**2);
console.log(2**1);

//операторы сравнения
console.log(false==0);//true -  это не строгое равенство
console.log(false===0);//false - это строгое равенство

console.log(false!=0);//flase -  это не строгое неравенство
console.log(false!==0);//true - это строгое неравенство

// приведение к числу
console.log(+"5");
console.log(+"false");//NaN
console.log(Number(+"5"));
console.log(Number("true")); //NaN
console.log(Number("false"));//NaN

console.log(Number(true));//0
console.log(Number(false));//1

console.log(Number(null));//0
console.log(Number(undefined));//NaN

//приведение к строке
console.log(5 + "");//строчная 5
console.log(5 + 5 + "");//10
console.log(5 + "" + 5);//55

// проверка на число
console.log(Number.isNaN(5));//false
console.log(Number.isNaN("5"));//false
console.log(Number.isNaN(true));//false
console.log(Number.isNaN("Hey"));//true

console.log(0.1 + 0.2);
console.log(0.1*10 + 0.2*10) / 10;

//методы обЪекта math
console.log(Math.floor(7.1));
console.log(Math.ceil(7.1));
console.log(Math.round(7.4));
console.log(Math.round(7.5));

console.log(Math.min(2, 6, 3, 43)); //2
console.log(Math.min(2, 6, 3, 43)); //43

console.log(Math.random());
console.log(Math.random() * (555 - 55) + 55);