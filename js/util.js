export function getRandomInt(min, max) {
  if (min <= max && min >= 0) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }
  return 'Неверный диапазон чисел';
}

export function stringLength (text, peak = 20) {
  if (text.length <= peak) {
    return(true);
  }
  return(false);
}

