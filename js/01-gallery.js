import { galleryItems } from './gallery-items.js';
// Change code below this line

function addGalleryEL() {
  const result = galleryItems.map(el => {
    return `<div class="gallery__item">
      <a class="gallery__link" href="${el.original}">
        <img
          class="gallery__image"
          src="${el.preview}"
          data-source="${el.original}"
          alt="${el.description}"
        />
      </a>
    </div>;`;
  });
  return result;
}
console.log(addGalleryEL());
{
  /* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>; */
}
