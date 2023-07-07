/* eslint-disable */
import { screen } from '@testing-library/dom';
import addCommentMock from '../mock/comments.js';

document.body.innerHTML = `
<div data-testid="comments-container">
    <h1 data-testid="comments-length">0</h1>
    <ul data-testid="comments-list">
        
    </ul>
</div>
`;

describe('displayComment', () => {
  test('should add comment', () => {
    const username = 'a simple name';
    const usercomment = 'comment from user';
    const addComment = addCommentMock(usercomment, username);

    addComment.forEach((comment) => {
      const newCommentEl = document.createElement('li');
      newCommentEl.innerHTML = `
       ${comment.usercomment}
       ${comment.comment}
       date: ${comment.date}
      `;
      screen.getByTestId('comments-list').appendChild(newCommentEl);
    });

    expect(screen.getByTestId('comments-list').children.length).toBe(addComment.length);
  });

  

  test('should display correct comment counter', () => {
    const username = 'a simple name';
    const usercomment = 'comment from user';
    const addComment = addCommentMock(usercomment, username);
    screen.getByTestId('comments-length').textContent = addComment.length;

    expect(screen.getByTestId('comments-length').textContent).toBe(addComment.length.toString());
  });
});