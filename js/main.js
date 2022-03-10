/* eslint-disable no-console */
/* eslint-disable eqeqeq */
function getRandomInt(min, max) {
  if (min <= max && min >= 0) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }
  return 'Неверный диапазон чисел';
}

getRandomInt(0, 100);
// Проверка.
// console.log(getRandomInt(0, 100));

function stringLength (text, peak = 40) {
  if (text.length <= peak) {
    return(true);
  }
  return(false);
}

stringLength('Любая строка короче ста символов');
// Проверка.
// console.log (stringLength('Любая строка больше ста символов (Любая строка больше ста символов)'));


const id = [];
for (let i = 0; i < 25; i++) {
  id[i] = i + 1;
}

const avatar = [];
for (let i = 0; i < 6; i++) {
  avatar[i] = i + 1;
}

const names = ['Артём', 'Дмитрий', 'Иван', 'Сергей'];
const message = ['Всё отлично!', 'В целом всё неплохо. Но не всё.'];

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};


const post = () => {
  const randomName = getRandomPositiveInteger(0, names.length - 1);
  const randomMassage = getRandomPositiveInteger(0, message.length - 1);
  const randomId = getRandomPositiveInteger(0, id.length - 1);
  const randomAvatar = getRandomPositiveInteger(0, avatar.length - 1);

  return {
    id: id[randomId],
    avatar: `img/avatar-${  avatar[randomAvatar]  }.img`,
    message: message[randomMassage],
    names: names[randomName],
  };
};

console.log(
  post()
);

const descriptionPhoto = [];

for (let i = 0; i < 25; i++) {
  descriptionPhoto.push(post());
}

// console.log (descriptionPhoto);
