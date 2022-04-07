import {img} from './picture.js';
export const discovery = () => {
  const bigPicture = document.querySelector('.big-picture');
  const closeBtn = document.querySelector('.big-picture__cancel');
  const body = document.querySelector('body');
  const commentCount = document.querySelector('.social__comment-count');
  const commentLoader = document.querySelector('.comments-loader');
  for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('click', () => {
      bigPicture.classList.remove('hidden');
      body.classList.add('modal-open');
      commentCount.classList.add('hidden');
      commentLoader.classList.add('hidden');
    });
  }
  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
    commentCount.classList.remove('hidden');
    commentLoader.classList.remove('hidden');
  });
  document.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
      bigPicture.classList.add('hidden');
      body.classList.remove('modal-open');
      commentCount.classList.remove('hidden');
      commentLoader.classList.remove('hidden');
    }
  });
};
discovery();
