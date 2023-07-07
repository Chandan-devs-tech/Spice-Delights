import { baseUrl } from './apiData.js';

const getData = async () => {
  const result = await fetch(baseUrl);
  const { meals } = await result.json();
  return meals;
};

export default getData;
