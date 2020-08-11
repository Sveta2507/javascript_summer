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


const ul = `<ul><li>element</li></ul>`;
console.dir(ul);

const body = document.querySelector("body");

body.insertAdjacentHTML( "afterbegin",ul);

const div = document.querySelector(".div");
console.log(div);

div.style.border = "1px solid red";

const link1 = document.createElement("a");
const link2 = document.createElement("a");
const link3 = document.createElement("a");
const link4 = document.createElement("a");
 link1.textContent = "before begin";
 link2.textContent = "before end";
 link3.textContent = "after end";
 link4.textContent = "after begin";

 div.insertAdjacentElement("beforebegin", link1);
 div.insertAdjacentElement("beforeend", link2);
 div.insertAdjacentElement("afterend", link3);
 div.insertAdjacentElement("afterbegin", link4);

// div.remove(link2);

link1.remove();
link2.replaceWith(link1);

div.innerHTML = "";

// repaint & reflow

const button = document.querySelector("button");
button.textContent = "click me";
button.style.width = "100px";
button.style.height = "50px";
button.style.backgroundColor = "blue";
button.addEventListener("click", (event) => {
    console.log(event.target);
    console.log(event.currentTarget);
    console.log("СРАБОТАЛО СОБЫТИЕ КЛИК");
    const picture = document.createElement("img");
    picture.setAttribute("src", "https://images.pexels.com/photos/2191673/pexels-photo-2191673.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
    div.append(picture);
});

const form = document.getElementById("form");
const input = document.getElementById("input");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("произошла отправка формы");
    console.dir(event);
});

body.addEventListener("click", (event) => {
    console.log(event.target);
    console.log(event.currentTarget);
});