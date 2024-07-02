import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox;

export function renderGallery(images) {
  const gallery = document.querySelector('#gallery');
  gallery.innerHTML = images
    .map(({ largeImageURL, webformatURL, tags, likes, views, comments, downloads }) => `
      <a href="${largeImageURL}" class="gallery-item">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        <div class="info">
          <p><b>Likes</b>: ${likes}</p>
          <p><b>Views</b>: ${views}</p>
          <p><b>Comments</b>: ${comments}</p>
          <p><b>Downloads</b>: ${downloads}</p>
        </div>
      </a>
    `)
    .join('');

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery-item', {
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionDelay: 250,
    });
  } else {
    lightbox.refresh();
  }
}
