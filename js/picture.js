import { generatingArray } from './data.js';
import { openingBigPicture } from './open_picture.js';
export const generatePicture = () => {
  const bigPicture = document.querySelector('.big-picture');
  const pictures =document.querySelector('.pictures');
  const newElement = document.querySelector('#picture');
  const similarPictureElement = newElement.content.querySelector('.picture');
  const similarListFragment = document.createDocumentFragment();
  const exportObject = generatingArray();
  exportObject.forEach((elem) => {
    const pictureElement = similarPictureElement.cloneNode(true);
    pictureElement.querySelector('.picture__img').setAttribute('alt', elem.description);
    pictureElement.querySelector('.picture__img').setAttribute('src', elem.url);
    pictureElement.querySelector('.picture__comments').textContent = elem.comments.id;
    pictureElement.querySelector('.picture__likes').textContent = elem.likes;
    similarListFragment.appendChild(pictureElement);
    pictureElement.addEventListener('click', () => {
      bigPicture.classList.remove('hidden');
      openingBigPicture();
    });
  });
  pictures.appendChild(similarListFragment);
};

export const generateComment = () => {
  const social = document.querySelector('.social');
  const socialHeader = document.querySelector('.social__header');
  const similarListFragment = document.createDocumentFragment();
  const exportObject = generatingArray();
  exportObject.forEach((elem) => {
    const commentElement = socialHeader;
    commentElement.querySelector('.likes-count').textContent = elem.likes;
    commentElement.querySelector('.social__picture').setAttribute('src', elem.comments.avatar);
    commentElement.querySelector('.social__picture').setAttribute('alt', elem.comments.name);
    commentElement.querySelector('.social__caption').textContent = elem.description;
    similarListFragment.appendChild(commentElement);
  });
  social.prepend(similarListFragment);
};
