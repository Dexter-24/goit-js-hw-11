import { getPicturesByQuery } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.querySelector('.js-form');
const loader = document.querySelector('#loader');
const gallery = document.querySelector('#gallery');

searchForm.addEventListener('submit', handleSearch);

function handleSearch(evt) {
  evt.preventDefault();
  const queryValue = evt.currentTarget.elements.query.value.trim();
  
  if (!queryValue) {
    iziToast.error({
      title: 'Error',
      message: '❌ Please enter a search query',
    });
    return;
  }

  gallery.innerHTML = '';
  loader.classList.remove('hidden');

  getPicturesByQuery(queryValue)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.warning({
          title: 'No Results',
          message: 'Sorry, there are no images matching your search query.',
        });
      } else {
        renderGallery(data.hits);
      }
    })
    .catch(onFetchError)
    .finally(() => {
      loader.classList.add('hidden');
      searchForm.reset();
    });
}

function onFetchError(error) {
  iziToast.error({
    title: 'Error',
    message: '❌ No pictures found',
  });
}