import { generatingArray } from './data.js';


const newElement = document.querySelector('#picture');
newElement.innerHTML = '';


const exportObject = generatingArray();
exportObject.forEach((elem) => {
  document.querySelector('#picture').insertAdjacentHTML('afterbegin', `
  <a href="#" class="picture">
    <img class="picture__img" src="${elem.url}" width="182" height="182" alt="${elem.description}">
    <p class="picture__info">
      <span class="picture__comments">${elem.comments.id}</span>
      <span class="picture__likes">${elem.likes}</span>
    </p>
  </a>`);

});
