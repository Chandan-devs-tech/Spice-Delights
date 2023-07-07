import updateNumberOfLikes from './updateLike.js';
import { involvementLikeUrl } from './apiData.js';

// Send Like To API
const sendLike = async (idValue, div) => {
  try {
    const result = await fetch(involvementLikeUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: idValue,
        action: 'like',
      }),
    });
    if (result.ok) {
      updateNumberOfLikes(idValue, div);
    } else {
      console.error('Failed to update DOM:', result.status);
    }
  } catch (error) {
    console.error('Error recording Like:', error);
  }
};

export default sendLike;