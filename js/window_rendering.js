import { generateComment } from './picture.js';
export const bigPicture = () => {
  const connect = document.querySelectorAll('.picture');
  const picture = document.querySelector('.big-picture__img img');
  connect.forEach((elem) => {
    elem.addEventListener('click', (e) => {
      picture.setAttribute('src', e.target.getAttribute('src'));
      picture.setAttribute('alt', e.target.getAttribute('alt'));
      generateComment();
    });
  });
};
