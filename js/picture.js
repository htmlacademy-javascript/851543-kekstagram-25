import { generatingArray } from './data.js';

const newElement = document.querySelector('#picture');

const similarPictureElement = newElement.content.querySelector('.picture');
const similarListFragment = document.createDocumentFragment();

const exportObject = generatingArray();
exportObject.forEach((elem) => {
  const pictureElement = similarPictureElement.cloneNode(true);
  pictureElement.querySelector('.picture__img').setAttribute('src', elem.url);
  pictureElement.querySelector('.picture__comments').textContent = elem.comments.id;
  pictureElement.querySelector('.picture__likes').textContent = elem.likes;
  similarListFragment.appendChild(pictureElement);
});

newElement.after(similarListFragment);
