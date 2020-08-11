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


