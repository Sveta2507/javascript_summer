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


//!
// const credits = 23580;
// console.log(credits);
// const pricePreDroid = 3000;
// console.log(pricePreDroid);
//!
//............................................
// let totalPrice =20580;
// let totalPrice1 = 17580 || 14580 || 11580;
//............................................

//!
// let enteredData = prompt("Введите кол-во дроидов, которые вы хотите заказать");
// let totalPrice;
//!

//.......................................................................
// if (enteredData = 1) {
//     totalPrice = 20580;
// } else if (enteredData = 2) {
//     totalPrice = 17580;
// } else if (enteredData = 3) {
//     totalPrice = 14580;
// } else if (enteredData = 4) {
//     totalPrice = 11580;
// } else if (enteredData = 5) {
//     totalPrice = 8580;
// } else if (enteredData = 6) {
//     totalPrice = 5580;
// } else if (enteredData = 7) {
//     totalPrice = 2580;
// }
//...............................................................................


//!
// if (enteredData > 7) {
//     alert(`Недостаточно средств на счету`);
// } else if (enteredData <= 0){
//     alert(`Введенные данные не являются допустимыми`); 
// } else if (enteredData >= 5 && enteredData <= 7) {
//     alert(`Вы купили ${enteredData} дроидов, на счету осталось ${totalPrice} кредитов`);
// } else if (enteredData > 1 && enteredData <= 4){
//     alert(`Вы купили ${enteredData} дроида, на счету осталось ${totalPrice} кредитов`);
// } else if (enteredData = 1){
//     alert(`Вы купили ${enteredData} дроид, на счету осталось ${totalPrice} кредитов`);
// }
//!


//.................................................................
// if (enteredData > 7) {
//     alert(`Недостаточно средств на счету`);
// } else if (enteredData <= 0){
//     alert(`Введенные данные не являются допустимыми`); 
// } else if (enteredData = 7) {
//     alert(`Вы купили ${enteredData} дроидов, на счету осталось ${totalPrice} кредитов`);
// } else if (enteredData = 6) {
//     alert(`Вы купили ${enteredData} дроидов, на счету осталось ${totalPrice} кредитов`);
// } else if (enteredData = 5) {
//     alert(`Вы купили ${enteredData} дроидов, на счету осталось ${totalPrice} кредитов`);
// } else if (enteredData = 4){
//     alert(`Вы купили ${enteredData} дроида, на счету осталось ${totalPrice} кредитов`);
// } else if (enteredData = 3){
//     alert(`Вы купили ${enteredData} дроида, на счету осталось ${totalPrice} кредитов`);
// } else if (enteredData = 2){
//     alert(`Вы купили ${enteredData} дроида, на счету осталось ${totalPrice} кредитов`);
// } else if (enteredData = 1){
//     alert(`Вы купили ${enteredData} дроид, на счету осталось ${totalPrice} кредитов`);
// }
//........................................................................

let enteredData = prompt("Введите кол-во дроидов, которые вы хотите заказать");
if (enteredData <= 0){
    alert(`Введенные данные не являются допустимыми`); 
} else if (enteredData > 7) {
    alert(`Недостаточно средств на счету`);
}  
//0else if (enteredData == 0) {
//     alert("Отменено пользователем");
// }
switch(enteredData) {
    case "1": 
    alert(`Вы купили 1 дроид, на счету осталось 20580 кредитов`);
    break;
    case "2":
    console.log(`Вы купили 2 дроида, на счету осталось 17580 кредитов`);
    break;
    case "3":
    alert("Вы купили 3 дроида, на счету осталось 14580 кредитов");
    break;
    case "4":
    alert("Вы купили 4 дроида, на счету осталось 11580 кредитов");
    break;
    case "5":
    alert("Вы купили 5 дроидов, на счету осталось 8580 кредитов");
    break;
    case "6":
    alert("Вы купили 6 дроидов, на счету осталось 5580 кредитов");
    break;
    case "7":
    alert("Вы купили 7 дроидов, на счету осталось 2580 кредитов");
    break;
    // default:
    // alert(`Недостаточно средств на счету`);
    // break; 
}


//task 5

// let enteredData = prompt("Введите страну, в которой вы проживаете, чтобы оформить доставку").toUpperCase();
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
//     case "Jamaica":
//     alert("Delivery into Jamaica will cost 120 credits");
//     break;
//     default:
//         alert(`Delivery is unable in your country`);
//         break;
// }



// //task 6 
// let enteredData;
// let total = 0;
// let input = prompt(`Введите подходящее число`);
// while (input >= 0){
//     alert(`Введите подходящее число`);
//    if (enteredData >= 0) {
//        alert(`Введите ещё одно число`)
//    } else {
//        alert(`Общая сумма чисел равна ${input}`)
//    }
// 