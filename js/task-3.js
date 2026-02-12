const gallery = document.querySelector('.gallery');

const galleryMarkup = images
  .map(
    image => `
      <li class="gallery__item">
        <img class="gallery__img" src="${image.url}" alt="${image.alt}">
      </li>
    `
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryMarkup);
