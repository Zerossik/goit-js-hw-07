import { galleryItems } from './gallery-items.js';
// Change code below this line
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
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  console.log(evt.target.nodeName);
  evt.preventDefault();
  return;
}
galleryEl.addEventListener('click', handleImgClick);
console.log(addGalleryEL());
