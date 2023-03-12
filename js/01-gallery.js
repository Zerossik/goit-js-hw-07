import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');
function addGalleryEL() {
  const result = galleryItems
    .map(el => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${el.original}">
        <img
          class="gallery__image"
          src="${el.preview}"
          data-source="${el.original}"
          alt="${el.description}"
        />
      </a>
    </div>`;
    })
    .join(' ');
  galleryEl.insertAdjacentHTML('afterbegin', result);
}
function handleImgClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  createModalWindow(evt);
  return;
}

function createModalWindow(evt) {
  const instance = basicLightbox.create(`<img src="${evt.target.dataset.source}">`);
  instance.show();
}

// function closeModalWindow(evt) {
//   console.log(evt.code);
//   if (evt.code !== 'Escape') {
//     return;
//   }
//   instance.close();
// }
galleryEl.addEventListener('click', handleImgClick);
// window.addEventListener('keydown', closeModalWindow);
addGalleryEL();
