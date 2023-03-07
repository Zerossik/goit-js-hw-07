import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');
function addGalleryEL() {
  const result = galleryItems
    .map(el => {
      return `<a class="gallery__item" href="${el.original}">
  <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
</a>`;
    })
    .join(' ');
  galleryEl.insertAdjacentHTML('afterbegin', result);
  return;
}

function handleImgClick(evt) {
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  evt.preventDefault();
  createModalWindow(evt);
  return;
}

function createModalWindow() {
  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}

galleryEl.addEventListener('click', handleImgClick);
addGalleryEL();
