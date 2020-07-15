// console.log("Интерпретатор");
// console.log("переводит");
// console.log("код");
// console.log("на");
// console.log("язык");
// console.log("понятный");
// console.log("машине");

// let sum;
// console.log(sum); //undefined
// sum = 2 + 3;
// console.log(sum);
// console.log(typeof sum);//numer
// sum = "2" + 3;
// console.log(sum);
// sum = "2" + "3";
// console.log(typeof sum);//string
// sum = false;
// console.log(typeof sum);//boolean

// //взаимодействие с пользователем
// // const greet = alert("Hey");
// // console.log(greet); // undefined

// // const ask = confirm("Hey?");
// // console.log(ask);

// // const enter = prompt("Enter your name please");
// // console.log(enter);

// console.log(14%5);//0

// console.log(666%5);//1

// console.log(23%5);//3

// console.log(14%5);//4

// console.log(5%5);//0

// console.log(2**3);
// console.log(2**2);
// console.log(2**1);

// //операторы сравнения
// console.log(false==0);//true -  это не строгое равенство
// console.log(false===0);//false - это строгое равенство

// console.log(false!=0);//flase -  это не строгое неравенство
// console.log(false!==0);//true - это строгое неравенство

// // приведение к числу
// console.log(+"5");
// console.log(+"false");//NaN
// console.log(Number(+"5"));
// console.log(Number("true")); //NaN
// console.log(Number("false"));//NaN

// console.log(Number(true));//0
// console.log(Number(false));//1

// console.log(Number(null));//0
// console.log(Number(undefined));//NaN

// //приведение к строке
// console.log(5 + "");//строчная 5
// console.log(5 + 5 + "");//10
// console.log(5 + "" + 5);//55

// // проверка на число
// console.log(Number.isNaN(5));//false
// console.log(Number.isNaN("5"));//false
// console.log(Number.isNaN(true));//false
// console.log(Number.isNaN("Hey"));//true

// console.log(0.1 + 0.2);
// console.log(0.1*10 + 0.2*10) / 10;

// //методы обЪекта math
// console.log(Math.floor(7.1));
// console.log(Math.ceil(7.1));
// console.log(Math.round(7.4));
// console.log(Math.round(7.5));

// console.log(Math.min(2, 6, 3, 43)); //2
// console.log(Math.min(2, 6, 3, 43)); //43

// console.log(Math.random());
// console.log(Math.random() * (555 - 55) + 55);

//логические операторы
//логическое и &&
console.log(3>5);
if ( 3>5 ) {
    console.log("Код выполняется");
}
console.log("Код не выполняется");

console.log(5>3);
if (5>3) {
    console.log("Код выполняется");
} else {
    console.log("Код не выполняется");
}

console.log(5>3);
if (5>3) {
    console.log("Код выполняется");
} else if ( 4>2) {
    console.log("Код тоже выполнится");
} else {
    console.log("Код не выполняется");
}

if ( 5>3 && 4>2) {
    console.log("Код выполняется");
} else {
    console.log("Код не вополняется");
}

if ( 5>3 && 2>4) {
    console.log("Код выполняется");
} else {
    console.log("Код не вополняется");
}

if ( 5>3 || 2>4) {
    console.log("Код выполняется");
} else {
    console.log("Код не вополняется");
}

let a = true;
let b = false;
if (b) {
    console.log("Выражение правдиво");
} else if (!b) {
    console.log("Выражение ложно");
}

if (b) {
    console.log("Выражение правдиво");
} else if (!a) {
    console.log("Выражение ложно");
} else {
    console.log("Выполнилось только else");
}

// let age = +prompt("Введите Ваш возраст");
// if (age > 10 && age<16) {
//     console.log("Это подросток");
// } else if ( age>=16 && age<=21 ) {
//     console.log("Молодежь");
// } else {
//     console.log("Другая возрастная категория");
// }

// let hairColor = prompt("Введите Ваш цвет волос").toLowerCase();
// switch(hairColor) {
//     case "блонд": 
//     console.log("Вам нужно увложнять волосы");
//     break;
//     case "шатен":
//     console.log("Вам нужно питать Ваши волосы");
//     break;
//     default:
//         console.log("Я не знаю, какие у Вас волосы");
//         break;
// }

// let hairColor = prompt("Введите Ваш цвет волос").toUpperCase();
// switch(hairColor) {
//     case "БЛОНД": 
//     console.log("Вам нужно увложнять волосы");
//     break;
//     case "ШАТЕН":
//     console.log("Вам нужно питать Ваши волосы");
//     break;
//     default:
//         console.log("Я не знаю, какие у Вас волосы");
//         break;
// }

//while and do
// let A = 50;
// let maxCount = 50;
// while (A < maxCount) {
//     A = A + 100;
// console.log(A);
// }

// do{
//     A = A + 100;
//     console.log(A);
// } while (A < maxCount)

// for
// length - кол-во знаков
// let message = "I love javascript!";
// console.log(message.length);
// for (let i = 0; i<=message.length; i++) {
//     console.log(i);
// }
// // i++ || i=i+1 || i+=1
// let num =  10;
// for (let i = 0; i<=num; i+=2) {
//     console.log(i);
// }

// break and continue
for (let i = 1; i<15; i+=3) {
    if (i===10) {
        console.log("Мы достигли 10");
        break;
    }
    console.log(i);
}

// for (let i = 1; i<15; i+=3) {
//     if (i%2 === 0) {
//         continue;
//     }
//     if (i===13) {
//         continue;
//     }
//     console.log(i);
// }

for (let i = 1; i<15; i+=3) {
    if (i%2 === 0 || i===13) {
        continue;
    }
    console.log(i);
}