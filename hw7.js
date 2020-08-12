// task 1
const mainUl = document.getElementById("categories");
console.dir(mainUl);

console.log(`в списке ${mainUl.children.length} категорий`);

for (let i = 0; i < mainUl.children.length; i++) {
  const li = mainUl.children[i];
  console.log(li.children[0].textContent);
  console.dir(`${li.children[1].children.length} вложеных элементов`);
}

// task 2
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingr = document.getElementById("ingredients");
const createElements = function (arr) {
  for (let element of arr) {
    const li = document.createElement("li");
    li.textContent = element;
    ingr.appendChild(li);
  }
};
createElements(ingredients);

// task 3

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.getElementById("gallery");
const createItems = function (arr) {
  for (let elem of arr) {
    console.log(elem.url);
    const img = `<img src="${elem.url}">`;
    gallery.insertAdjacentHTML("afterbegin", img);
  }
};
createItems(images);

//task 4

const counterValue = document.querySelector("#value");
const value1 = document.querySelector('[data-action="increment"]');
const value2 = document.querySelector('[data-action="decrement"]');

let number = Number(counterValue.textContent);

value1.addEventListener("click", increment);
value2.addEventListener("click", decrement);

function increment(event) {
  number += 1;
  counterValue.textContent = number;
}

function decrement(event) {
  if (number > 0) {
    number -= 1;
    counterValue.textContent = number;
  }
}

// task 5

const input = document.querySelector("input#name-input");

const title = document.querySelector("span#name-output");

input.addEventListener("input", (event) => {
  title.textContent = event.target.value;
});

// task 6

const inputUsual = document.querySelector("#validation-input");
const validInput = document.querySelector('[data-length="6"]');
let dataLength = Number(validInput.dataset.length);

inputUsual.addEventListener("blur", (event) => {
  let letters = Number(event.target.value.length);

  if (dataLength !== letters) {
    inputUsual.classList.add("invalid");
  } else if (dataLength === letters) {
    inputUsual.classList.replace("invalid", "valid");
  }
});

// task 7

const input1 = document.querySelector("input#font-size-control");

const text = document.querySelector("span#text");

console.log(text.style);
input1.addEventListener("input", (event) => {
  text.style.fontSize = input1.value + "px";
});

// task 8 - ДОП задание
