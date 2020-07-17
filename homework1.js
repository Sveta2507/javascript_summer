//task 1
// let name="Генератор защитного поля";
// let price=1000;
// console.log('Выбран ' + name + ' цена за штуку ' + price + ' кредитов');
// console.log(`Выбран ${name} цена за штуку ${price} кредитов`);
// price=2000;
// console.log('Выбран ' + name + ' цена за штуку ' + price + ' кредитов');
// console.log(`Выбран ${name} цена за штуку ${price} кредитов`);

//task 2
// const total = 100;// количество товара на складе
// const ordered = 50;// единиц товара в заказe
// console.log(total);
// console.log(ordered);

// let message = "Введите количество товара";
// let enteredData = +prompt(message);
// console.log("enteredData: ", enteredData);
// if (enteredData > total) {
//     alert(`На складе недостаточно товара`);
// } else if (enteredData <= 0){
//     alert("Введите пожалуйста натуральное число");
// } 
// else {
//      alert(`Заказ оформлен, с Вами свяжется менеджер`);
// }



// // task 3
// const ADMIN_PASSWORD = 'jqueryismyjam';
// let enteredData = prompt("Введите пароль");
// if (enteredData === ADMIN_PASSWORD) { // строгое сравнение
//     alert(`Добро пожаловать`);
// } else {
//     alert(`Доступ запрещён, неверный пароль`);
// }


//task 4

// let credits = 23588 ; 
// const pricePerDroid = 3000; 
// const numberDroids = +prompt("Введите кол-во дроидов, которые Вы хотите заказать"); 
// console.log(typeof numberDroids);
// if(numberDroids == 0){ 
//     alert("Отменено пользователем"); 
// } else {
//     const Totalvalue = pricePerDroid + numberDroids; 
//     if(Totalvalue > credits) { 
//         alert("Недостаточно средств на счету");
//     } else {
//         credits = credits - Totalvalue; 
//         alert("Вы купили "  +numberDroids+  "дроидов, на вашем счету осталось"  +credits+  "кредитов");
//     }
// }




//task 5

// let enteredData = prompt("Type the country you live in to arrange delivery");
// enteredData = enteredData.toUpperCase();

// switch(enteredData) {
//     case "CHINA": 
//     alert(`Delivery into China will cost 100 credits`);
//     break;
//     case "CHILI":
//     console.log(`Delivery into Chili will cost 250 credits`);
//     break;
//     case "AUSTRALIA":
//     alert("Delivery into Australia will cost 170 credits");
//     break;
//     case "INDIA":
//     alert("Delivery into India will cost 80 credits");
//     break;
//     case "JAMAICA":
//     alert("Delivery into Jamaica will cost 120 credits");
//     break;
//     default:
//         alert(`Delivery is unable in your country`);
//         break;
// }



// //task 6 
// let total = 0;
// let input = confirm(`Введите подходящее число`);
// // while (input) {
// //     input = +prompt(`Введите подходящее число`);
// //     total = total + input;
// //     console.log(total);
// // }

// do { 
//     input = +prompt(`Введите подходящее число`);
//     total = total + input;
//     console.log(total);
// } while (input);
// alert(total);
 