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
