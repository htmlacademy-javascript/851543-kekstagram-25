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


const ID = [];
const PHOTOS = [];
const NAMES = ['Артём', 'Дмитрий', 'Иван', 'Сергей', 'Алексей', 'Иван',];
const DESCRIPTION = ['Звёздная ночь', 'Последний день Помпеи', 'Грачи прилетели', 'Мокрый луг', 'Девятый вал'];
const MESSAGE = ['Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',];
const getRandomPositiveInteger = (a, b) => {
  const LOWER = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const UPPER = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const RESULT = Math.random() * (UPPER - LOWER + 1) + LOWER;
  return Math.floor(RESULT);
};

const generatePost = () => {
  const randomNameIndex = getRandomPositiveInteger(0, NAMES.length - 1);
  const randomDescriptionIndex = getRandomPositiveInteger(0, DESCRIPTION.length - 1);
  const randomIdIndex = getRandomPositiveInteger(0, ID.length - 1);
  const randomAvatarIndex = getRandomPositiveInteger(0, PHOTOS.length - 1);
  const randomMassageIndex = getRandomPositiveInteger(0, MESSAGE.length - 1);

  return {
    id: ID[randomIdIndex],
    url: `photos/${  PHOTOS[randomAvatarIndex]  }.jpg`,
    description: DESCRIPTION[randomDescriptionIndex],
    names: NAMES[randomNameIndex],
    likes: getRandomPositiveInteger(15, 200),
    message: MESSAGE[randomMassageIndex],
    avatar: `img/avatar-${  getRandomPositiveInteger(1, 6)  }.svg`,
  };
};

const creatingArrayOne = () => {
  const descriptionPhoto = [];
  for (let i = 0; i < 25; i++) {
    ID[i] = i + 1;
    PHOTOS[i] = i + 1;
    descriptionPhoto.push(generatePost());
  }
  return descriptionPhoto;
};

creatingArrayOne();

console.log (creatingArrayOne());
