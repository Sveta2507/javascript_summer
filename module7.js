"use strict"
// Варианты получения доступа к элементу html

// 1) через имя тега
const title = document.querySelector("h1");
title.textContent = "Перезаписываю значение";
title.style.color = "blue";
title.style.backgroundColor = "green";

const list = document.querySelector("ul");
list.classList.add("myNewClass");
list.classList.remove("myNewClass");

const image = document.querySelector("img");
image.setAttribute("alt", "value");
image.src = "https://images.pexels.com/photos/3250260/pexels-photo-3250260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";
image.width = 250;
image.removeAttribute("alt");


// 2) - через класс
// const title = document.querySelector(".Main_Title");
// const title = document.getElementsByClassName("item");

//3) - через id
// const title = document.querySelector("#title");
// const title = document.getElementById("title");

//4) - через data-atribute
// const title = document.querySelector('[data-action="action"]');
console.log(title);
console.dir(title);

// создание элементов
const newLi = document.createElement("li");
newLi.textContent = "4";
console.log(newLi);
list.appendChild(newLi);
// list.prepend('добавляет в начало')
// list.append("несколько элементов в конец");
// list.removeChild(newLi); 
newLi.remove(); // новый метод

const newImage = image.cloneNode(false);
list.insertAdjacentElement("afterend", newImage);