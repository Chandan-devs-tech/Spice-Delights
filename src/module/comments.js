import Comment from './comment.js';

export const fetchComments = async (url, id) => {
  let response;
  await fetch(`${url}?item_id=${id}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  }).then(async (data) => {
    response = await data.json();
    return response;
  })
    .then((result) => {
      response = result;
    }).catch((error) => {
      throw error;
    });

  return response;
};

export const postComment = async (url, content) => {
  const newComment = JSON.stringify({
    item_id: content.idMeal,
    username: content.username,
    comment: content.comment,
  });

  fetch(url, {
    method: 'POST',
    body: newComment,
    headers: {
      'Content-type': 'application/json',
    },
  }).then(() => {
  }).catch((error) => {
    throw error;
  });
};

export const printComment = (comments) => {
  const getCommentContainer = document.querySelector('.comments-list');
  const commentsLength = document.querySelector('.comment-length');
  commentsLength.textContent = comments.length;

  getCommentContainer.innerHTML = '';
  comments.forEach((comment) => {
    getCommentContainer.appendChild(Comment(comment));
  });
};