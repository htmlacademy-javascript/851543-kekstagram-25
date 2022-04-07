
const connect = document.querySelectorAll('.picture');
const bigPicture = document.querySelector('.big-picture__img img');
connect.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    bigPicture.setAttribute('src', e.target.getAttribute('src'));
    bigPicture.setAttribute('alt', e.target.getAttribute('alt'));
  });
});
