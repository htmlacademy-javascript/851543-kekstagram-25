/* eslint-disable no-console */
/* eslint-disable eqeqeq */
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const int = getRandomInt(2);

if (int == 1) {
  console.log('Да');
} else {
  console.log('Нет');
}

const string = ('СложнА');

console.log(`Слово "СложнА" занимает ${  string.length  } символов`);
