import './style.css';
import { baseUrl, involvementCommentUrl } from './module/apiData.js';
import { postComment, printComment, fetchComments } from './module/comments';

let arrayOfMeals = [];
let arrayOfComments = [];
let selectedId = '';

const mainContainer = document.querySelector('.main-container');
const infoPopup = document.querySelector('.info-popup-container');
const backdrop = document.querySelector('.backdrop');
const closeBtn = document.querySelector('.close-btn');
const commentForm = document.querySelector('.comment-form');
const formSubmitButton = document.querySelector('.comment-submit-button');
const commentsList = document.querySelector('.comments-list');
const commentLength = document.querySelector('.comment-length');

const getData = async () => {
  const result = await fetch(baseUrl);
  const { meals } = await result.json();
  return meals;
};

getData();

const printFetchedComments = async () => {
  arrayOfComments = [];
  commentsList.innerHTML = '';
  commentLength.textContent = 0;

  try {
    const request = await fetchComments(involvementCommentUrl, selectedId);
    arrayOfComments = [...request];
    printComment(arrayOfComments);
  } catch (error) {
    console.log(error.message, 'error');
  }
};

const showMealDetailInformation = async (item, view) => {
  const imageDesk = document.querySelector('.img-desc img');
  const infoMealTitle = document.querySelector('.product-desc-title');
  const areaInfo = document.querySelector('.recep-area-info');
  const ingredients = document.querySelector('.recep-ingredient-info');
  const category = document.querySelector('.info-category');
  const mesure = document.querySelector('.info-mesure');

  switch (view) {
    case 'show': {
      selectedId = item.idMeal;
      printFetchedComments();
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${item.idMeal}`;
      const fetchData = await fetch(url);
      const { meals } = await fetchData.json();
      imageDesk.src = item.strMealThumb;
      infoMealTitle.textContent = item.strMeal;
      areaInfo.textContent = meals[0].strArea;

      ingredients.textContent = meals[0].strIngredient1;
      category.textContent = meals[0].strCategory;
      mesure.textContent = meals[0].strMeasure2;

      break;
    }
    case 'close': {
      imageDesk.src = '';
      infoMealTitle.textContent = '..loading';
      areaInfo.textContent = '..loading';

      ingredients.textContent = '';
      category.textContent = '..loading';
      mesure.textContent = '..loading';
      infoPopup.classList.remove('open');
      backdrop.classList.remove('open');
      break;
    }
    default: {
      break;
    }
  }
};

const showMealDetail = async (item) => {
  infoPopup.classList.add('open');
  backdrop.classList.add('open');
  await showMealDetailInformation(item, 'show');
};

const showMeals = async () => {
  arrayOfMeals = await getData();
  arrayOfMeals.forEach((item) => {
    const div = document.createElement('div');
    div.classList.add('gallery-item');
    div.setAttribute('data-id', item.idMeal);

    // Create the image element
    const img = document.createElement('img');
    img.src = item.strMealThumb;
    img.alt = '';
    img.className = 'meal-img';

    // Create the div for like and comment
    const likeCommentDiv = document.createElement('div');
    likeCommentDiv.className = 'like-comment';

    // Create the paragraph element for item name
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
    numOfLikesDiv.textContent = '0 Likes';

    // Create the div for button container
    const btnContainerDiv = document.createElement('div');
    btnContainerDiv.className = 'btn-container';

    // Create the comment button
    const commentBtn = document.createElement('button');
    commentBtn.className = 'comment-btn';
    commentBtn.textContent = 'Comment';
    commentBtn.addEventListener('click', () => showMealDetail(item));

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

    // Now you can use the main div in your DOM

    mainContainer.appendChild(div);
  });
};

// add comment
const postCommentInfo = async (e) => {
  e.preventDefault();
  const commentNameInput = document.querySelector('.comment-user_name');
  const commentContent = document.querySelector('.comment-content');

  if (commentNameInput.value.trim().split('').length < 1 || commentContent.value.trim().split('').length < 1) {
    alert('get serious');
  }

  // post comment to server
  const findIndexOfSelectedData = arrayOfMeals.findIndex((e) => e.idMeal === selectedId);
  try {
    formSubmitButton.textContent = '...loading';
    formSubmitButton.disabled = true;
    await postComment(`${involvementCommentUrl}`, {
      idMeal: arrayOfMeals[findIndexOfSelectedData].idMeal,
      username: commentNameInput.value,
      comment: commentContent.value,
    });

    arrayOfComments.unshift(
      {
        username: commentNameInput.value,
        comment: commentContent.value,
      },
    );

    printComment(arrayOfComments);
    formSubmitButton.textContent = 'Post comment 💬';
    formSubmitButton.disabled = false;
    commentNameInput.value = '';
    commentContent.value = '';
  } catch (error) {
    console.log(error);
    alert('failed to post your request !');
  }
};

document.addEventListener('DOMContentLoaded', async () => {
  await showMeals();
});

closeBtn.addEventListener('click', () => showMealDetailInformation({}, 'close'));
commentForm.addEventListener('submit', postCommentInfo);
