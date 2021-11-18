export const randomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const futureDateTime = (days) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date;
}