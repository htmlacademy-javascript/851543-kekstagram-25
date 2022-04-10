const NAMES = ['Артём', 'Дмитрий', 'Иван', 'Сергей', 'Алексей', 'Иван',];
const DESCRIPTION = ['Звёздная ночь', 'Последний день Помпеи', 'Грачи прилетели', 'Мокрый луг', 'Девятый вал'];
const MESSAGE = ['Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',];
export const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export const generatePost = (a) => {
  const randomNameIndex = getRandomPositiveInteger(0, NAMES.length - 1);
  const randomDescriptionIndex = getRandomPositiveInteger(0, DESCRIPTION.length - 1);
  const randomMassageIndex = getRandomPositiveInteger(0, MESSAGE.length - 1);

  return {
    id: a,
    url: `photos/${  a  }.jpg`,
    description: DESCRIPTION[randomDescriptionIndex],
    comments: {
      id: getRandomPositiveInteger(1, 200),
      name: NAMES[randomNameIndex],
      message: MESSAGE[randomMassageIndex],
      avatar: `img/avatar-${  getRandomPositiveInteger(1, 6)  }.svg`,
    },
    likes: getRandomPositiveInteger(15, 200),
  };
};

export const generatingArray = () => {
  const descriptionPhoto = [];
  for (let i = 0; i < 25; i++) {
    descriptionPhoto.push(generatePost(i + 1));
  }
  return descriptionPhoto;
};
