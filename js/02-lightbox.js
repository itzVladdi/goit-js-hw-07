import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

let items = "";
galleryItems.forEach(({ preview, original, description } = {}) => {
    items += `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`;
});

gallery.innerHTML = items;

var lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
});
console.dir(lightbox);
