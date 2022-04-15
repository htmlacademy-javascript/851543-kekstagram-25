
const uploadForm = document.querySelector('.img-upload__form');
const textHashtags = document.querySelector('.text__hashtags');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__text-valid',
  errorTextParent: 'img-upload__text-valid',
});

const hashtagPattern = /^(#[A-za-zА-Яа-яЁё0-9_]{2,19}\s?)*$/;

let hashtagsArray = [];

const duplicatHashtag = (value) => {
  const hashtagsLine = String(value.toLowerCase());
  hashtagsArray = hashtagsLine.split('');
  return hashtagsArray.length === new Set(hashtagsArray).size;
};

pristine.addValidator(textHashtags, (value) => hashtagPattern.test(value), 'Хэш-тег должен начинаться с #, не содержать спецсимволов и пробелы, максимальная длина одного хэш-тега 20 символов', 2, false);

pristine.addValidator(textHashtags, duplicatHashtag, 'Дублирование хэш-тегов не допустимо');

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
