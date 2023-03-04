import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const galleryCard = createGalleryCard(galleryItems);

function createGalleryCard(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
    return `
 <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
   `
}).join(''); 
}

gallery.insertAdjacentHTML('afterbegin', galleryCard);

gallery.addEventListener('click', handleMakeOriginCard);

function handleMakeOriginCard(event) {
  event.preventDefault();
  
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  let newSrc = event.target.dataset.source;
  
    const instance = basicLightbox.create(`
      <div class="modal">
      <img
        src="${newSrc}"
        width = "1280"
      />  
     </div>
     `,
      {
        onShow: (instance) => {
        
          document.addEventListener('keydown', (event) => {
            if (event.code === 'Escape') { instance.close() }
          });
        
          instance.element().querySelector('.modal').addEventListener('click', () => { instance.close() });   
          
        }
      }
    )
     
  instance.show()
} 


