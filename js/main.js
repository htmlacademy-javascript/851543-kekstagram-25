/* eslint-disable no-console */
/* eslint-disable eqeqeq */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * min, max);
}

const int = getRandomInt(2);

if (int == 1) {
  console.log('Да');
} else {
  console.log('Нет');
}

const square = function () {
  const text = 'qwerty';
  const result = text.length;
  return result;
};

const end = square();
if(end <= 7) {
  console.log(true);
} else {
  console.log(false);
}
