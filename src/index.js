import './style.css';
import fetchLikes from './module/getLike.js';
import getData from './module/getBaseData.js';

let arrayOfMeals = [];
const mainContainer = document.querySelector('.main-container');
const showMeals = async () => {
  try {
    arrayOfMeals = await getData();
    const dataLikes = await fetchLikes();
    arrayOfMeals.forEach((item, id) => {
      const div = document.createElement('div');
      div.classList.add('gallery-item');
      div.setAttribute('data-id', id);

      // Create the image element
      const img = document.createElement('img');
      img.src = item.strMealThumb;
      img.alt = '';
      img.className = 'meal-img';

      // Create the div for like and comment
      const likeCommentDiv = document.createElement('div');
      likeCommentDiv.className = 'like-comment';

      // Create the paragraph element for each item name
      const itemName = document.createElement('p');
      itemName.className = 'item-name';
      itemName.textContent = item.strMeal;

      // Create the heart icon element
      const heartIcon = document.createElement('i');
      heartIcon.className = 'fa-regular fa-heart';
      heartIcon.style.color = '#ff0000';

      // Append the item name and heart icon to the like and comment div
      likeCommentDiv.appendChild(itemName);
      likeCommentDiv.appendChild(heartIcon);

      // Create the div for number of likes
      const numOfLikesDiv = document.createElement('div');
      numOfLikesDiv.className = 'num-of-likes';
      // numOfLikesDiv.textContent = '0 Likes';

      // Create the div for button container
      const btnContainerDiv = document.createElement('div');
      btnContainerDiv.className = 'btn-container';

      // Create the comment button
      const commentBtn = document.createElement('button');
      commentBtn.className = 'comment-btn';
      commentBtn.textContent = 'Comment';
      // commentBtn.addEventListener('click', () => {
      //   popupWindow(item.idMeal);
      // });

      // Create the reservation button
      const reservationBtn = document.createElement('button');
      reservationBtn.className = 'reservation-btn';
      reservationBtn.textContent = 'Reservation';

      // Append the buttons to the button container div
      btnContainerDiv.appendChild(commentBtn);
      btnContainerDiv.appendChild(reservationBtn);

      // Append all the created elements to the main div
      div.appendChild(img);
      div.appendChild(likeCommentDiv);
      div.appendChild(numOfLikesDiv);
      div.appendChild(btnContainerDiv);

      const countOfLikes = div.querySelector('.num-of-likes');
      // const myLikes = dataLikes.find(like => like.item_id === id)?.likes??0;
      let likeOfMeal = 0;
      dataLikes.forEach((like) => {
        if (like.item_id === id) {
          likeOfMeal = like.likes;
        }
      });

      countOfLikes.textContent = `${likeOfMeal} likes`;

      // Now you can use the main div in your DOM
      mainContainer.appendChild(div);
    });
  } catch (error) {
    console.error('ERROR', error);
  }
};

document.addEventListener('DOMContentLoaded', async () => {
  await showMeals();
});
