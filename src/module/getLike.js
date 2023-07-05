import { involvementLikeUrl } from './apiData.js';

const fetchLikes = async () => {
  try {
    const result = await fetch(involvementLikeUrl, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await result.json();
    console.log(data);
    return data;
  } catch (error) {
    return [];
  }
};

export default fetchLikes;
