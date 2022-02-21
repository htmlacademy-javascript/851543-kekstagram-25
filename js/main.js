function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let int = getRandomInt(2);

if (int == 1) {
  console.log('Да');
} else {
  console.log('Нет');
}

let string = ('СложнА');

console.log('Слово "СложнА" занимает ' + string.length + ' символов');
