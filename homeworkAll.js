// module 1
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
//     let Totalvalue = pricePerDroid * numberDroids; 
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
//     alert(`Delivery into Chili will cost 250 credits`);
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
 



// module 2
//task 1 
// const logItems = function(array) {
//     // твой код
//     for (let i = 0; i < logItems.length; i += 1) {
//       console.log( `1 -` , 'Mango');
//       }
//     for (let i = 0; i < logItems.length; i += 1) {
//       console.log( `2 -` , 'Poly');
//       }
//     for (let i = 0; i < logItems.length; i += 1) {
//       console.log( `3 -` , 'Ajax');
//       } 
//   };
  
//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
  
//   logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);




// task 2
// const calculateEngravingPrice = function(message, pricePerWord) {
//   // твой код
//   if (message.length < 80 && pricePerWord < 80) return message; 
//   return message.slice(0, 80) + "...";

// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// ); // 160

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// ); // 240

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// ); // 120




// //task 3
// const findLongestWord = function(string) {
//   // твой код
//   // if (string.length >= 5);
//   return string.slice(20, 26, 0, 5, 9, 14);
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'



//task 4
// const formatString = function(string) {
//     // твой код
//         if (string.length < 40) return string; 
//         return string.slice(0, 40) + "...";
//   };
  
//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
//   // вернется оригинальная строка
  
//   console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
//   // вернется форматированная строка
  
//   console.log(formatString('Curabitur ligula sapien.'));
//   // вернется оригинальная строка
  
//   console.log(
//     formatString(
//       'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//     ),
//   );
  // вернется форматированная строка





//task 5
// const checkForSpam = function(message) {
//     message = message.toLowerCase();
//     if (message.includes('spam') || message.includes("sale")) return true;

//     return false;
    // твой код
//   };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
//   console.log(checkForSpam('Latest technology news')); // false
  
//   console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
//   console.log(checkForSpam('Get best sale offers now!')); // true
  
//   console.log(checkForSpam('[SPAM] How to earn fast money?')); // true



//task 6
// let input = confirm(); 
// const numbers = [];
// let total = 0; 
// while (input) { 
//     input = prompt("Введите число"); 
//     if (isNaN(input)) { 
//         alert("Вы ввели не число"); 
//         continue; 
//     }
//     if (input === null) { 
//         if (numbers.length > 0) { 
//             for (let num of numbers) { 
//                 total += num; 
//             }
//             console.log(`Общая сумма чисел равна ${total}`);
//         } else { 
//             alert("Было введено не число, попробуйте еще раз"); 
//         }    
//     }
//     numbers.push(+input);
// }



// //task 7
// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// const isLoginValid = function(login) {
//   // твой код  
//   if (login.length >= 4 && login.length <= 16) return true;
//   return false;
// };

// const isLoginUnique = function(allLogins, login) {
//   // твой код

//   for (let loginelm of allLogins) {
//       if (loginelm === logins) return false;
//           console.log("Такой логин уже используется!");
//         }
//         return true;
//     };
    
// let msg;
// const addLogin = function(allLogins, login) {
//     let validLogin = isLoginValid(login);
//     console.log(validLogin);
//     let uniqueLogin = isLoginUnique(allLogins, login);
//     console.log(uniqueLogin);
//   // твой код
//     if (!validLogin) {
//         msg = "Ошибка! Логин должен быть от 4 до 16 символов";    
//     } else {
//     if (!uniqueLogin) {
//         msg = "Такой логин уже используется!";
//     } else {
//         allLogins.push(login);
//         msg = "Логин успешно добавлен!";
//         }
//     }
//     return msg;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
// console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'



//module 3

//task 1
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
//   toShowKeys() {
//     console.log(this.name, this.age, this.hobby, this.premium, this.mood);
//   }
// };

// console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user.hobby);
// console.log(user.premium);
// console.log(user.mood);
// user.toShowKeys();
// user.mood = "happy";
// user.toShowKeys();
// user.hobby = "skydiving";
// user.toShowKeys();
// user.premium = "false";
// user.toShowKeys();

// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log('Value: ', user[key]);
// }


//task 2

// const countProps = function(obj) {
//   // твой код
//   name = "Mango";
//   age = 2;
//   mail = 'poly@mail.com';
//   isOnline = true;
//   score = 500;
// };
// const values = Object.values(countProps);

// let total = 0;

// for (const value of values) {
//   total += countProps;
// }

// console.log(total);

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countProps({})); // 0

// console.log(countProps({ name: 'Mango', age: 2 })); // 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3




//task 3

const findBestEmployee = function(employees) {
  // твой код

}

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux



//task 4

// const countTotalSalary = function(employees) {
//   // твой код
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400

// //task 5

// const countTotalSalary = function(employees) {
//   // твой код
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400


// //task 6

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function(allProdcuts, productName) {
//   // твой код
//   const values = Object.values(products);

// let total = 0;

// for (const value of values) {
//   total += value;
// }

// console.log(total); // 20
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(calculateTotalPrice(products, 'Радар')); // 5200

// console.log(calculateTotalPrice(products, 'Дроид')); // 2800



//task 7 - ДОП задание
/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {},

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {},

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {},

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {},

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {},

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {},
// };