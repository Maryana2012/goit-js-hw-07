import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const galleryCard = createGalleryCard(galleryItems);

function createGalleryCard(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
    return `
   <a  class="gallery__link" href="${original}">
    <img 'self'
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
   `
}).join(''); 
}

gallery.insertAdjacentHTML('afterbegin', galleryCard);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
} );

