/* eslint-disable no-console */
/* eslint-disable eqeqeq */
function getRandomInt(min, max) {
  const random = Math.floor(min + Math.random() * (max + 1 - min));
  if (random == 20) {
    console.log(true);
  }else if (min >= max) {
    console.log(false);
  } else {
    console.log(false);
  }
}

getRandomInt(19, 22);

function stringLength (text, peak = 40) {
  const symbols = text.length;
  if (symbols <= peak) {
    console.log(true);
  } else {
    console.log(false);
  }
}

stringLength('Любая строка короче ста символов');
