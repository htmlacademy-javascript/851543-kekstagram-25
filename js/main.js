/* eslint-disable no-console */
/* eslint-disable eqeqeq */
function getRandomInt(min, max) {
  const int = Math.floor(Math.random(min, max));
  if (int >= min || int <= max) {
    console.log(true);
  }else if (min > max) {
    console.log(false);
  } else {
    console.log(false);
  }
}

getRandomInt(1, 5);

function test (a, b = 100) {
  if (a.length <= b) {
    console.log(true);
  } else {
    console.log(false);
  }
}

test('Любая строка короче ста символов');
