"use strict";

//module 5
//task 1
// function Account({login, email}) {
//   this.login = login;
//   this.email = email;
// }

// Account.prototype.getInfo = function() {
//     console.log(`login = ${this.login}, email = ${this.email}`);
// }

// console.log(Account.prototype.getInfo); // function

// const mango = new Account({
//   login: 'Mangozedog',
//   email: 'mango@dog.woof',
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com



//task 2
// class User {
//   constructor(user) {
//       this.name = user.name;
//       this.age = user.age;
//       this.followers = user.followers;
//   }

//   getInfo() {
//       return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
//   }
// }

// const mango = new User({
//     name: 'Mango',
//     age: 2,
//     followers: 20,
//   });
  
//   console.log(mango.getInfo()); // User Mango is 2 years old and has 20 followers
  
//   const poly = new User({
//     name: 'Poly',
//     age: 3,
//     followers: 17,
//   });
  
//   console.log(poly.getInfo()); // User Poly is 3 years old and has 17 followers


//   //task 3

// class Storage {
//   constructor(items) {
//       this.items = items;
//   }

//   getItems() {
//       return this.items;
//   }

//   addItem(item) {
//       this.items.push(item);
//   }

//   removeItem(item) {
//       let index = this.items.indexOf(item);
//       if (index != -1) {
//           this.items.splice(index, 1);
//       }
//   }
// }

//   const storage = new Storage([
//     'Нанитоиды',
//     'Пролонгер',
//     'Железные жупи',
//     'Антигравитатор',
//   ]);
  
//   const items = storage.getItems();
//   console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  
//   storage.addItem('Дроид');
//   console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  
//   storage.removeItem('Пролонгер');
//   console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]



//   //task 4
// class StringBuilder {
//   constructor(str) {
//       this._value = str;
//   }

//   get value() {
//       return this._value;
//   }

//   append(str) {
//       this._value += str;
//   }

//   prepend(str) {
//       this._value = str + this._value;
//   }

//   pad(str) {
//       this.prepend(str);
//       this.append(str);
//   }
// }

//   const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='



// //task 5
// class Car {
//   static getSpecs(car) {
//     console.log(`maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`);
//   }

//     constructor(car) {
//       this.speed = 0;
//       this._price = car.price;
//       this.maxSpeed = car.maxSpeed;
//       this.isOn = false;
//       this.distance = 0;
//     }

//     get price() {
//       return this._price;
//     }

//     set price(value) {
//       this._price = value;
//     }

//     turnOn() {
//       return this.isOn = true;
//     }
  

//     turnOff() {
//       return this.isOn = false, this.speed = 0;
//     }
  
//     accelerate(value) {
//       this.speed += value;
//       if (this.speed <= this.maxSpeed && this.isOn) return this.speed;
//     }
  
//     decelerate(value) {
//       this.speed -= value;
//       if (this.speed > 0) return this.speed;
//     }
  
//     /*
//      * Добавляет в поле distance киллометраж (hours * speed),
//      * но только в том случае если машина заведена!
//      */
//     drive(hours) {
//       this.distance += hours * this.speed;
//       console.log(this.distance);
//       if (this.isOn) return this.distance;
//   }
// }
  
//   const mustang = new Car({ maxSpeed: 200, price: 2000 });
  
//   mustang.turnOn();
//   mustang.accelerate(50);
//   mustang.drive(2);
  
//   Car.getSpecs(mustang);
//   // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
  
//   mustang.decelerate(20);
//   mustang.drive(1);
//   mustang.turnOff();
  
//   Car.getSpecs(mustang);
//   // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000
