import { baseUrl } from './apiData.js';

export const mealcounter = async () => {
  const result = await fetch(baseUrl);
  const data = await result.json();
  return data.meals.length;
};

const showCount = (num) => {
  const homeli = document.querySelector('.home-li');
  homeli.textContent = `(${num})Meals`;
};

export { showCount };