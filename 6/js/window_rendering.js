import { generateComment } from './picture.js';
export const bigPicture = () => {
  const connect = document.querySelectorAll('.picture');
  const Picture = document.querySelector('.big-picture__img img');
  connect.forEach((elem) => {
    elem.addEventListener('click', (e) => {
      Picture.setAttribute('src', e.target.getAttribute('src'));
      Picture.setAttribute('alt', e.target.getAttribute('alt'));
      generateComment();
    });
  });
};
