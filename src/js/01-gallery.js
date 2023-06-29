// Descris în documentație
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';
const galleryElement = document.querySelector('.gallery');

// crearea si randarea markup-ului

function createGallery() {
  const galleryMarkup = galleryItems
    .map(
      item => `
        <li class="gallery__item">
          <a class="gallery__link" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}" />
          </a>
        </li>
      `
    )
    .join('');
  galleryElement.insertAdjacentHTML('afterbegin', galleryMarkup);
}

createGallery();



const galleryHandler = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
galleryHandler.on('show.simplelightbox');