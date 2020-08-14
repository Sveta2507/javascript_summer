"use strict";

import gallery from "C:UsersHPjavascript_summergallery-items.js";
console.log(gallery);
const list = document.querySelector(".js-gallery");
const div1 = document.querySelector(".js-lightbox");
const div2 = document.querySelector(".lightbox__overlay");
const div3 = document.querySelector(".lightbox__content");
const image = document.querySelector(".lightbox__image");
const button = document.querySelector(".lightbox__button");
console.log(div1, div2, div3, list, image, button);
const generateItem = function ({src, ds, alt}) {
  const item = document.createElement("li");
  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.setAttribute("href", "");
  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.setAttribute("src", src);
  img.setAttribute("data-source", ds);
  img.setAttribute("alt", alt);

  link.appendChild(img);
//   console.log(link);
  item.appendChild(link);
  return item;
};
// generateItem();

const generateGallery = function (array, callback) {
   let listGallery = array.forEach((elem) => {
       list.appendChild(callback(elem));
   }
    return list.appendChild(item);
};
generateGallery(gallery, generateItem);
