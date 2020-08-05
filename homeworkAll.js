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
//     for (let i = 0; i < array.length; i += 1) {
//       console.log(`${i+1} - ${array[i]}`);
//       }
//   };
  
//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
  
//   logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);




// task 2
// const calculateEngravingPrice = function(message, pricePerWord) {
// // let arr = message.split(" ");
// // let count = arr.length;
// // let totalPrice = count * pricePerWord;

// // return totalPrice;
// return totalPrice = message.split(" ").length * pricePerWord;
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
const findLongestWord = function(string) {
  let arr = string.split(" ");
  // console.log(arr);
  let longestWord = arr[0];
  for (let i = 1; i < arr.length; i++ ) {
    // console.log(arr[i]);
    if (longestWord.length < arr[i].length) {
      longestWord = arr[i];
  }
}
return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'



//task 4
// const formatString = function(string) {
//     // твой код
//         if (string.length <= 40) return string; 
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
//   // вернется форматированная строка





//task 5
// const checkForSpam = function(message) {
//     message = message.toLowerCase();
//     if (message.includes('spam') || message.includes("sale")) return true;

//     return false;
//   };
  
//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
// console.log(checkForSpam('Get best sale offers now!')); // true
  
// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true



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
//   if (login.length >= 4 && login.length <= 16) return true;
//   return false;
// };

// const isLoginUnique = function(allLogins, login) {
//   for (let loginelm of allLogins) {
//       if (loginelm === login) return false;
//         }
//         return true;
//     };
    
// let msg;
// const addLogin = function(allLogins, login) {
//     let validLogin = isLoginValid(login);
//     let uniqueLogin = isLoginUnique(allLogins, login);
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

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = "false";

// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }


//task 2

// const countProps = function(obj) {
//   const keys = Object.keys(obj);
//   // console.log(keys);
// return keys.length;
// };


// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countProps({})); // 0

// console.log(countProps({ name: 'Mango', age: 2 })); // 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3




//task 3

// const findBestEmployee = function(employees) {
//   const entries = Object.entries(employees);
//   let workScore = entries[0][1];
//   let name = entries[0][0];
//   for (let i = 0; i < entries.length; i++) {
//     if (workScore < entries[i][1]) {
//       workScore = entries[i][1];
//       name = entries[i][0];
//     }
//   }
//   return `${name} : ${workScore}`;
// }

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux



//task 4

// const countTotalSalary = function(employees) {
// let values = Object.values(employees);
// // console.log(values);
// let total = 0;
// for (let val of values) {
//   total += val;
// }
// return total;
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
//   for (let obj of allProdcuts) {
//     if (obj.name === productName) {
//       return obj.price * obj.quantity;
//     }
//   }
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
//   id: 0,
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {
//     this.id += 1;
//     return {
//       id: this.id,
//       amount: amount,
//       type: type,
//     }
//   },

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {
//     this.balance += amount;
//     let newTransaction = this.createTransaction(amount, Transaction.DEPOSIT)
//     this.transactions.push(newTransaction);
//   },

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {
//     if (this.balance < amount) {
//       alert("У Вас не достаточно денег");
//     } else {
//       this.balance -= amount;
//       let newTransaction = this.createTransaction(amount, Transaction.WITHDRAW)
//       this.transactions.push(newTransaction);
//     }
//   },

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {
//     for (let transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//   },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
// */
// getTransactionTotal(type) {
//   let total = 0;
//   for (let transaction of this.transactions) {
//     if (transaction.type === type) {
//       total += transaction.amoumt;
//     }
//   }
//   return total;
// },
// };

// account.deposit(60);
// console.log(account.getBalance());
// console.log(account.transactions);
// account.deposit(100);
// account.deposit(200);
// account.deposit(300);
// account.deposit(400);
// account.deposit(500);
// account.deposit(600);
// console.log(account.getBalance());
// console.log(account.transactions);

// account.withdraw(3000);
// console.log(account.getBalance());
// console.log(account.transactions);
// console.log(account.getTransactionDetails(5));