// объявили функции высшего порядка
const toLearnFrontEnd = function(what, how) {
    how(what);
};

const lang = "javascript";
const video = "webinars";

//колбэки
const toRead = function(variable) {
    console.log(`I learn ${variable}`)
};
const toWatch = function(variable) {
    console.log(`I watch ${variable}`)
};
//Анонинимные колбэк функции
toLearnFrontEnd("html", () => {
    console.log("Анонимный колбэк функции")
});

// Вызываем функцию высшего ряда
toLearnFrontEnd(lang, toRead);
toLearnFrontEnd(video, toWatch);

//Абстрагирование повторений

const repeatFunc = function(count) {
let result;
for(let i = 0; i <= count; i++){
    result = i;
    console.log(result);
    }
};

repeatFunc(5);

//Фильтрация массива 
const fruits = [ 
    { name: "apples", quantity: 200, isFresh: true }, 
    { name: "graрes", quantity: 150, isFresh: false }, 
    { name: "bananas", quantity : 100, isFresh: true }, 
    { name: "oranges" , quantity: 120 }, 
];    

const filterFruits = function (array, cbFunc) {
    const filterArray = []; 
    for(let element of array){ 
        console.log(element);
        const ok = cbFunc(element);
        console.log(ok); 
        if(ok) {
            filterArray.push(element); 
        }
    };
    return console.log(filterArray);
}
filterFruits(fruits, (fresh) => fresh.isFresh);
filterFruits(fruits, (el) => el.quantity > 100);
 

//колбэки
// stack вызов

function main(param) {
    console.log("Начала работать главная функция");
    param();
} 

function cb() {
    console.log("Выполняется колбэк функция");
}
main(cb);


// замыкание
function createCounter() {
    let value = 0;
    function increment () {
        value += 1;
        return console.log(value);
    }
    function decrement () {
        value -= 1;
        return console.log(value);
    }
    return {increment, decrement}
}
const counter1 = createCounter();
counter1.increment();

counter1.increment();
counter1.increment();


// ключевое слово this
const nam = {
    number: 0,
    increment() {
        return this.number+=1;
    }
}
console.log(nam.increment());

//или так

// let number = 10;
// const nam = {
//     number: 0,
//     increment() {
//         return number+=1;
//     }
// }
// console.log(nam.increment());

// методы call и apply
function hello(hotel, stars) {
    return console.log(`hello, ${this.name}, ${hotel}, ${stars}, I'm glad to see you`);
}

const user = {
    name: "sveta",
}
hello.call(user, "Rixos", "five stars");

hello.apply(user, ["Hilton", "four stars"]);

// bind
hello(nam.increment.bind(nam));
