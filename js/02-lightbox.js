import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const galleryMarkUp = addGalleryItems(galleryItems);

function addGalleryItems(galleryItems) {

    return galleryItems.map(({ preview, original, description }) => {
        
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    }).join('');

}

gallery.insertAdjacentHTML('beforeend', galleryMarkUp);

gallery.addEventListener('click', handleOpenModal);

let galleryModal = new SimpleLightbox('.gallery a',
        {
            captions: true,
            captionsData: 'alt',
            captionDelay: 250,
    });
        
function handleOpenModal(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
    return
    };
    
galleryModal.on('close.simplelightbox', function () {
galleryModal.close();
});
};




