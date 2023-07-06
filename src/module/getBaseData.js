import { baseUrl } from './apiData.js';

const getData = async () => {
  const result = await fetch(baseUrl);
  const { meals } = await result.json();
  console.log(meals);
  return meals;
};

export default getData;
