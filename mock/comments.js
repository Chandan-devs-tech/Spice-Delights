const commentsArray = [
  {
    username: 'user 1',
    comment: 'comments',
    data: new Date().toDateString(),
  },
  {
    username: 'user 2',
    comment: 'comments 2',
    data: new Date().toDateString(),
  },
  {
    username: 'user 3',
    comment: 'comments 3',
    data: new Date().toDateString(),
  },
];

const addCommentMock = (comment, username) => {
  const newComment = {
    username,
    comment,
    data: new Date().toDateString(),
  };
  commentsArray.push(newComment);

  return commentsArray;
};

export default addCommentMock;