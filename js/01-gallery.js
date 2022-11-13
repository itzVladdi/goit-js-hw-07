import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

let items = "";
galleryItems.forEach(({ preview, original, description } = {}) => {
    items += `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
});

gallery.innerHTML = items;

function createModalImg(url, alt) {
    const modalImg = basicLightbox.create(`<img src="${url}" alt="${alt}" />`, {
        onShow: () => {
            document.addEventListener("keydown", closeOnEscBtn);
        },
        onClose: () => {
            document.removeEventListener("keydown", closeOnEscBtn);
        },
    });
    function closeOnEscBtn(event) {
        if (event.key === "Escape") {
            modalImg.close();
        }
    }
    return modalImg;
}

function onGalleryItemClick(event) {
    event.preventDefault();
    const { target } = event;
    if (target.nodeName !== "IMG") {
        return;
    }
    const imgUrl = target.dataset.source;
    const imgAlt = target.alt;
    const modalImg = createModalImg(imgUrl, imgAlt);
    modalImg.show();
}

gallery.addEventListener("click", onGalleryItemClick);
